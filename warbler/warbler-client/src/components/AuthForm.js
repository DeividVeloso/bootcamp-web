import React from "react";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const authType = this.props.singUp ? "signup" : "signin";
    this.props
      .onAuth(authType, { ...this.state })
      .then(resp => console.log("OPAAA"));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, singUp } = this.props;
    return (
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              onChange={this.handleChange}
              value={email}
            />
            <label htmlFor="password">Password: </label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={password}
            />
            {singUp && (
              <React.Fragment>
                <label htmlFor="username">Username: </label>
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                  value={username}
                />
                <label htmlFor="profileImageUrl">Image Url: </label>
                <input
                  className="form-control"
                  id="profileImageUrl"
                  name="profileImageUrl"
                  type="text"
                  onChange={this.handleChange}
                  value={profileImageUrl}
                />
              </React.Fragment>
            )}
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;

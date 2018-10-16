import React from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    let messageList = messages.map(m => {
      console.log("MM", messages);
      //   return (
      //   <MessageList
      //     key={m._id}
      //     date={m.createAt}
      //     text={m.text}
      //     username={m.user.username}
      //     profileImageUrl={m.user.profileImageUrl}
      //   />
      // )
    });

    return [];
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}
export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);

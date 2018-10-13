require("dotenv").load();
const jwt = require("jsonwebtoken");

//Authentication
exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        return next();
      } else {
        return next({ status: 401, message: "Token not provided" });
      }
    });
  } catch (error) {
    return next(error);
  }
};

//Authorization
exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (error) {
    return next({ status: 401, message: "Unauthorized" });
  }
};

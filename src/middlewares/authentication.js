const jwt = require("jsonwebtoken");
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "hello world", (err, dcryptData) => {
      if (err) return reject(err);
      resolve(dcryptData);
    });
  });
};
module.exports = async (req, res, next) => {
  //is authentication key avail in header?
  if (!req?.headers?.authentication) {
    return res.status(400).send({
      error: true,
      message: "Please provide a valid authorization toke",
    });
  }
  // is token type bearer?
  let token = req.headers.authentication.split(" ");
  if (token[0] !== "bearer") {
    return res.status(400).send({
      error: true,
      message: "Please provide a valid authorization toke",
    });
  }
  //is token valid?
  let user;
  try {
    user = await verifyToken(token[1]);
  } catch (err) {
    return res.status(400).send({
      error: true,
      message: "Please provide a valid authorization toke",
    });
  }
  // attach  the user to the request
  req.user = user.user;
  // give permission to go to next middleware
  next();
};
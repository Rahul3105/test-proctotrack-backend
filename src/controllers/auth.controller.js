const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const createToken = (user) => {
  return jwt.sign({ user: user }, "hello world");
};
const login  = async (req, res) => {
  try {
    //check if gmail is correct
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res
        .status(400)
        .send({ error: true, message: "email or password is incorrect" });
    }
    // check if password is correct
    let match = user.password == req.body.password;
    if (!match) {
      return res
        .status(400)
        .send({ error: true, message: "email or password is incorrect" });
    }
    
    //create and send token
    const token = createToken(user);
    return res.status(200).send({ token });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
module.exports = login
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {v4:uuidv4} = require('uuid');
const {setUser} = require('../service/auth');



async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
    return res.redirect("/user/login");
  } catch (err) {
    console.error(err);
    return res.render("signup", { error: "Signup failed. Try again!" });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render("login", { error: "Invalid email or password" });
    }

    // Login successful
    // const sessionid = uuidv4();
    // setUser(sessionid, user);
    const token = setUser(user);
    // res.cookie("uuid",token);

    return res.jsonO({token});

  } catch (err) {
    console.error(err);
    return res.render("login", { error: "Login failed. Try again!" });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};

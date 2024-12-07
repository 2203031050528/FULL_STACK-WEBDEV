const User = require('../models/User');


async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });

    return res.redirect('/')
    
}



async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password});
  if(!user)
    return res.render("login",{
  error: "Invalid email or password",});

  return res.render('/')
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}

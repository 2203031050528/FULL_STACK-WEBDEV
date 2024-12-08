const {getUser} = require("../service/auth")

async function restrictToLoggeninUserOnly (req,res,next){
    // const userUid = req.cookies.uid;
    const userid = req.headers[authorization]

    if (!userUid) return res.redirect('/login');
    const token = userUid.split("bearer ")[1];

    const user = getUser(token);
    // const user = getUser(userUid);

    if (!user) return res.redirect('/login');
    req.user = user;

    next();


}

async function checkAuth(req, res, next) {
    const userid = req.headers[authorization];
    const token = userUid.split("bearer ")[1];

    const user = getUser(token);
}


module.exports = {
    restrictToLoggeninUserOnly
};



const isLoggedIn = (req, res, next) => {
    if (req.session.loggedIn)
        next();
    else
        res.redirect('/login');
};


const isLoggedOut = (req, res, next) => {
    if (!req.session.loggedIn)
        next();
    else
        res.redirect('/');
};


module.exports={isLoggedIn, isLoggedOut};
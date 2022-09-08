
const isLoggedIn = (req, res, next) => {
    if (req.session.loggedIn)
        next();
    else
        res.redirect('/login');
};

const isAuthorized = (req, res, next) => {
    if (req.session.user_id === +req.params.id)
        next();
    else
        res.status(403).json({message: 'Access forbidden'});
};

const isLoggedOut = (req, res, next) => {
    if (!req.session.loggedIn)
        next();
    else
        res.redirect('/');
};


module.exports={isLoggedIn, isAuthorized, isLoggedOut};
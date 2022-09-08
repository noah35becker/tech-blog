
// IMPORTS
const router = require('express').Router();
const {isLoggedOut} = require('../utils/auth');



// ROUTES

// Home page
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});


// Login page
router.get('/login', isLoggedOut, (req, res) =>
    res.render('login', {loggedIn: false})
);



// EXPORT
module.exports = router;
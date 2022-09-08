
// IMPORTS
const router = require('express').Router();
const sequelize = require('../config/connection');
const {isLoggedIn, isLoggedOut} = require('../utils/auth');



// Home page
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});


// Login page
router.get('/login', isLoggedOut, (req, res) =>
    res.render('login', {loggedIn: false})
);


// Dashboard
router.get('/dashboard', isLoggedIn, (req, res) =>
    res.render('dashboard', {loggedIn: true})
);



// EXPORT
module.exports = router;
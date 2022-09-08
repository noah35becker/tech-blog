
// IMPORTS
const router = require('express').Router();
const sequelize = require('../config/connection');



// Home page
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});


// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn)
        res.redirect('/');
    else
        res.render('login', {loggedIn: false});
});



// EXPORT
module.exports = router;
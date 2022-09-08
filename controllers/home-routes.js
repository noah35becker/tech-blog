
// IMPORTS
const router = require('express').Router();
const sequelize = require('../config/connection');



// Home page
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});



// EXPORT
module.exports = router;
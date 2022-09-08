
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../../utils/auth');



// Update password
router.get('/password', isLoggedIn, (req, res) => {
    res.render('update-user-info/password', {loggedIn: true});
});


// Update username
router.get('/username', isLoggedIn, (req, res) => {
    res.render('update-user-info/username', {loggedIn: true});
});


// Update email
router.get('/email', isLoggedIn, (req, res) => {
    res.render('update-user-info/email', {loggedIn: true});
});



// EXPORT
module.exports = router;
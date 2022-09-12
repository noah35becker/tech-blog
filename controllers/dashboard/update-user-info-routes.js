
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../../utils/auth');



// Update password
router.get('/password', isLoggedIn, (req, res) => {
    res.render('update-user-info/password', {
        loggedIn: true,
        page_subtitle: 'Update password'
    });
});


// Update username
router.get('/username', isLoggedIn, (req, res) => {
    res.render('update-user-info/username', {
        loggedIn: true,
        page_subtitle: 'Update username'
    });
});


// Update email
router.get('/email', isLoggedIn, (req, res) => {
    res.render('update-user-info/email', {
        loggedIn: true,
        page_subtitle: 'Update email'
    });
});


// Delete account
router.get('/delete-account', isLoggedIn, (req, res) => {
    res.render('update-user-info/delete-account', {
        loggedIn: true,
        page_subtitle: 'Delete account'
    });
});



// EXPORT
module.exports = router;
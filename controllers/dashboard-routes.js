
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../utils/auth');
const {User} = require('../models');



// Dashboard
router.get('/', isLoggedIn, async (req, res) => {
    const currentUserData = await User.findByPk(req.session.user_id);

    res.render('dashboard', {user: currentUserData.get({plain: true}), loggedIn: true})
});



// EXPORT
module.exports = router;
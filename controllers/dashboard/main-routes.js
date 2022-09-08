
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../../utils/auth');
const {User, Post} = require('../../models');



// ROUTE

// Dashboard
router.get('/', isLoggedIn, async (req, res) => {
    let currentUserData = await User.findByPk(req.session.user_id, {
        include: {
            model: Post,
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            as: 'posts'
        }
    });

    currentUserData = currentUserData.get({plain: true});
    for (const post of currentUserData.posts){
        if (post.createdAt.toString() === post.updatedAt.toString()){
            delete post.updatedAt;
        }
    }

    res.render('dashboard', {user: currentUserData, loggedIn: true});
});



// EXPORT
module.exports = router;
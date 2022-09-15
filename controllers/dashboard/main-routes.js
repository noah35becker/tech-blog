
// IMPORTS
const router = require('express').Router();
const {isLoggedInUrlAuth} = require('../../utils/auth');
const {User, Post, Comment} = require('../../models');
const {purgeUpdatedAtProperty} = require('../../utils/general-helpers');



// ROUTE

router.get('/', isLoggedInUrlAuth, async (req, res) => {
    let currentUserData = await User.findByPk(req.session.user_id, {
        include: {
            model: Post,
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            as: 'posts',
            include: {
                model: Comment,
                as: 'comments'
            }
        },
        order: [[
            {model: Post, as: 'posts'}, 'updatedAt', 'DESC'
        ]]
    });

    currentUserData = currentUserData.get({plain: true});
    currentUserData.posts = purgeUpdatedAtProperty(currentUserData.posts);

    res.render('dashboard', {
        user: currentUserData,
        loggedIn: true,
        page_subtitle: 'Dashboard'
    });
});



// EXPORT
module.exports = router;
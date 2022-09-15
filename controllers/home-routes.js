
// IMPORTS
const router = require('express').Router();
const {isLoggedOutUrlAuth} = require('../utils/auth');
const {Post, User, Comment} = require('../models');
const {purgeUpdatedAtProperty} = require('../utils/general-helpers');



// ROUTES

// Home page
router.get('/', async (req, res) => {
    let dbPostsData = await Post.findAll({
        attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Comment,
                as: 'comments'
            }
        ],
        order: [['updatedAt', 'DESC']]
    });

    if (dbPostsData.length){
        dbPostsData = dbPostsData.map(post => post.get({plain: true}));
        dbPostsData = purgeUpdatedAtProperty(dbPostsData);
    }

    res.render('homepage', {
        posts: dbPostsData,
        loggedIn: req.session.loggedIn,
        currentUserId: req.session.user_id
    });
});


// Login page
router.get('/login', isLoggedOutUrlAuth, (req, res) =>
    res.render('login', {
        loggedIn: false,
        page_subtitle: 'Login'
    })
);


// Individual post page
router.get('/post/:id', async (req, res) => {
    let dbPostData = await Post.findByPk(req.params.id, {
        attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
        include: [
            {
                model: User,
                attributes: ['id', 'username'],
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'createdAt'],
                as: 'comments',
                include: {
                    model: User,
                    attributes: ['id', 'username']
                },
                order: [['createdAt', 'ASC']]
            }
        ]
    });

    if (!dbPostData){
        res.status(404).redirect('/');
        return;
    }

    dbPostData = dbPostData.get({plain: true});
    dbPostData = purgeUpdatedAtProperty(dbPostData);

    res.render('single-post', {
        post: dbPostData,
        loggedIn: req.session.loggedIn,
        page_subtitle: `Single post`,
        editNow: +req.query.edit_now,
        currentUserId: req.session.user_id
    })
});



// EXPORT
module.exports = router;
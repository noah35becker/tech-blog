
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../../utils/auth');
const {Post, User} = require('../../models');



// REQUESTS

// Get all
router.get('/', async (req, res) => {
    try{
        const dbPostsData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        });
        res.json(dbPostsData);
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});


// Get one
router.get('/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        });
        
        if (!dbPostData)
            res.status(404).json({message: 'No post found with this ID'});
        else
            res.json(dbPostData);
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});


// // Create new
router.post('/', isLoggedIn, async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
     
        res.json({
            message: 'Post successfully created',
            post: dbPostData
        });
    }catch (err){
        console.log(err);
        res.status(400).json(err);
    }
});


// Update preexisting
router.put('/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id);

        if (!dbPostData){
            res.status(404).json({message: 'No post found with this ID'});
            return;
        }
        
        if (!dbPostData.isLinkedToUser(req.session.user_id)){
            res.status(403).json({message: 'Access forbidden'});
            return;
        }

        const updatedPostData = await dbPostData.update(
            req.body,
            {
                individualHooks: true
            }
        );

        res.json({
            message: 'Post successfully updated',
            post: updatedPostData
        });
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});



// Delete
router.delete('/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id);

        if (!dbPostData){
            res.status(404).json({message: 'No post found with this ID'});
            return;
        }
        
        if (!dbPostData.isLinkedToUser(req.session.user_id)){
            res.status(403).json({message: 'Access forbidden'});
            return;
        }

        await dbPostData.destroy();
        res.json({message: 'Post successfully deleted'});
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    };
});



// EXPORT
module.exports = router;
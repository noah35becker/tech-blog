
// IMPORTS
const router = require('express').Router();
const {isLoggedIn} = require('../../utils/auth');
const {Comment} = require('../../models');



// REQUESTS

// Create new
router.post('/', isLoggedIn, async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
     
        res.json({
            message: 'Comment successfully created',
            comment: dbCommentData
        });
    }catch (err){
        console.log(err);
        res.status(400).json(err);
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try{
        const dbCommentData = await Comment.findByPk(req.params.id);

        if (!dbCommentData){
            res.status(404).json({message: 'No comment found with this ID'});
            return;
        }
        
        if (!dbCommentData.isLinkedToUser(req.session.user_id)){
            res.status(403).json({message: 'Access forbidden'});
            return;
        }

        await dbCommentData.destroy();
        res.json({message: 'Comment successfully deleted'});
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    };
});



// EXPORT
module.exports = router;
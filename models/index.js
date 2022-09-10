
// IMPORTS
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



// ASSOCIATIONS

User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    as: 'comments'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})



// EXPORTS
module.exports = {User, Post, Comment};
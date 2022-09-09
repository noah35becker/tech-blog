
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
    foreignKey: 'user_id'
});


User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    as: 'comments'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})



// EXPORTS
module.exports = {User, Post};
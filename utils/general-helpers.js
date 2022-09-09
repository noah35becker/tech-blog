
// When createdAt and updatedAt are identical for a given post, removes the updatedAt property
// (this is important for how post-info.handlebars processes post data)
function purgeUpdatedAtProperty(posts){
    for (const post of posts){
        if (post.createdAt.toString() === post.updatedAt.toString()){
            delete post.updatedAt;
        }
    }

    return posts;
}


module.exports = {purgeUpdatedAtProperty};

// FUNCTION
async function deleteCommentButtonHandler(commentId){
    const response = await fetch(`/api/comment/${commentId}`, {
        method: 'delete'
    });

    if (response.ok)
        location.reload();
    else if (response.status === 401)
        location.replace(response.headers.get('location'));
    else
        alert(response.statusText);
}


// EVENT LISTENER
$('article.comment').on('click', '.delete-comment-btn', async function(){
    await deleteCommentButtonHandler(+$(this).closest('article.comment').attr('comment-id'));
});

// FUNCTION
async function deletePostBtnHandler(postId){
    const response = await fetch(`/api/post/${postId}`,{
        method: 'delete'
    });

    const secondToLastUrlPath = location.toString().split('/')[location.toString().split('/').length - 2];
    const lastUrlPath = location.toString().split('/')[location.toString().split('/').length - 1];

    if (response.ok){
        if (secondToLastUrlPath === 'post' || lastUrlPath === 'dashboard')
            location.replace('/dashboard');
        else
            location.replace('/');
    } else if (response.status === 401)
        location.replace(response.headers.get('location'));
    else
        alert(response.statusText);
}



// EVENT LISTENER
var fireCount = 0; // prevent multiple click events from firing
$('article.post').on('click', '.delete-post-btn', async function(){
    if (++fireCount === 1)
        await deletePostBtnHandler(+$(this).closest('article.post').attr('post-id'));
});

// FUNCTION
async function deletePostBtnHandler(postId){
    const response = await fetch(`/api/post/${postId}`,{
        method: 'delete'
    });

    const secondToLastUrlPath = window.location.toString().split('/')[window.location.toString().split('/').length - 2];
    const lastUrlPath = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (response.ok){
        if (secondToLastUrlPath === 'post' || lastUrlPath === 'dashboard')
            document.location.replace('/dashboard');
        else
            document.location.replace('/');
    }else
        alert(response.statusText);
}



// EVENT LISTENER
var fireCount = 0; // prevent multiple click events from firing
$('article.post').on('click', '.delete-post-btn', async function(){
    if (++fireCount === 1)
        await deletePostBtnHandler(+$(this).closest('article.post').attr('post-id'));
});
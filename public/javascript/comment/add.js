
function addCommentSpace(){
    
// VARIABLES
const addCommentWrapperEl = $('.add-comment-wrapper');
const newCommentEl = $('<textarea id="new-comment" placeholder="new comment" />');

const postId = +$('article.post').attr('post-id');



// FUNCTIONS

function addCommentBtnHandler(){
    addCommentWrapperEl.prepend(newCommentEl);

    $('.add-comment-btn')
        .removeClass('add-comment-btn')
        .addClass('save-new-comment-btn')
        .text('Post new comment');
}


async function saveNewCommentBtnHandler(){
    const newComment = newCommentEl.val().trim();

    if (newComment){
        const response = await fetch('/api/comment',{
            method: 'post',
            body: JSON.stringify({
                content: newComment,
                post_id: postId
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok)
            location.reload();
        else
            alert(response.statusText);
    }
}



// EVENT LISTENERS
$('.add-comment-wrapper').on('click', '.add-comment-btn', addCommentBtnHandler);
$('.add-comment-wrapper').on('click', '.save-new-comment-btn', saveNewCommentBtnHandler);

}

addCommentSpace();
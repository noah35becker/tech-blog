
function addCommentSpace(){
    
// VARIABLES
const addCommentWrapperEl = $('#add-comment-wrapper');
const newCommentEl = $('<input id="new-comment" placeholder="New comment" class="mt-1 mb-3" />');

const postId = +$('article.post').attr('post-id');



// FUNCTIONS

function addCommentBtnHandler(event){
    event.preventDefault();

    addCommentWrapperEl.prepend(newCommentEl);

    $('.add-comment-btn')
        .removeClass('add-comment-btn')
        .addClass('save-new-comment-btn')
        .html('<i class="fa-regular fa-message"></i>&nbsp;&nbsp;Post comment')
        .attr('type', 'submit');
}


async function saveNewCommentBtnHandler(event){
    event.preventDefault();

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
addCommentWrapperEl.on('click', '.add-comment-btn', addCommentBtnHandler);
addCommentWrapperEl.on('click', '.save-new-comment-btn', saveNewCommentBtnHandler);

}

addCommentSpace();
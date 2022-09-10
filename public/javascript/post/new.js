
function newPostSpace(){

// VARIABLES

const newPostWrapperEl = $('.new-post-wrapper');

const newPostBtnEl = $('.new-post-btn');

const newTitleEl = $('<input type="text" id="title-editor" placeholder="title" />');
const newContentEl = $('<textarea id="content-editor" placeholder="content" />');



// FUNCTIONS

function newPostBtnHandler(){
    newPostWrapperEl.prepend(newContentEl);
    newPostWrapperEl.prepend(newTitleEl);

    $('.new-post-btn')
        .removeClass('new-post-btn')
        .addClass('save-new-post-btn')
        .text('Save new post');
}


async function saveNewPostBtnHandler(){
    const newTitle = newTitleEl.val().trim();
    const newContent = newContentEl.val().trim();

    if (newTitle && newContent){
        const response = await fetch('/api/post',{
            method: 'post',
            body: JSON.stringify({
                title: newTitleEl.val(),
                content: newContentEl.val()
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok){
            location.reload();
        }else
            alert(response.statusText);
    }
}



// EVENT LISTENERS
$('.new-post-wrapper').on('click', '.new-post-btn', newPostBtnHandler);
$('.new-post-wrapper').on('click', '.save-new-post-btn', saveNewPostBtnHandler);

}

newPostSpace();
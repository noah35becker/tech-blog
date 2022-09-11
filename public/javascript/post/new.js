
function newPostSpace(){

// VARIABLES

const newPostWrapperEl = $('.new-post-wrapper');

const newTitleEl = $('<input type="text" id="title-editor" placeholder="Title" class="mt-1 mb-3" />');
const newContentEl = $('<textarea id="content-editor" placeholder="Content" class="mb-2" />');



// FUNCTIONS

function newPostBtnHandler(){
    newPostWrapperEl.prepend(newContentEl);
    newPostWrapperEl.prepend(newTitleEl);

    $('.new-post-btn')
        .removeClass('new-post-btn')
        .addClass('save-new-post-btn mt-2')
        .html('<i class="fa-regular fa-floppy-disk"></i>&nbsp;&nbsp;Save new post');
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
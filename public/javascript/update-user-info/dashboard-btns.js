
// FUNCTIONS

function updatePasswordBtnHandler(){
    document.location.replace('/dashboard/update-user-info/password');
};

function updateUsernameBtnHandler(){
    document.location.replace('/dashboard/update-user-info/username');
};

function updateEmailBtnHandler(){
    document.location.replace('/dashboard/update-user-info/email');
};


// EVENT LISTENERS
$('#update-password-dashboard-btn').on('click', updatePasswordBtnHandler);
$('#update-username-dashboard-btn').on('click', updateUsernameBtnHandler);
$('#update-email-dashboard-btn').on('click', updateEmailBtnHandler);
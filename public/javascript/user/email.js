
// FUNCTION
async function updateEmailFormHandler(event){
    event.preventDefault();

    const email = $('#new-email').val().trim();
    const password = $('#password').val();

    if (email && password){
        const response = await fetch('/api/user/update-email', {
            method: 'put',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok){
            location.replace('/dashboard');
        }else
            alert(response.statusText);
    }
}


// EVENT LISTENER
$('#update-email-form').on('submit', updateEmailFormHandler);

// FUNCTION
async function updateUsernameFormHandler(event){
    event.preventDefault();

    const username = $('#new-username').val().trim();
    const password = $('#password').val();

    if (username && password){
        const response = await fetch('/api/user/update-username', {
            method: 'put',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok)
            location.replace('/dashboard');
        else if (response.status === 400 || response.status === 500){
            const responseJson = await response.json();
            alert(responseJson.message);
        }
    }
}


// EVENT LISTENER
$('#update-username-form').on('submit', updateUsernameFormHandler);
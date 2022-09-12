
// FUNCTION
async function deleteAccountFormHandler(event){
    event.preventDefault();

    const password = $('#password').val();

    if (password){
        const response = await fetch('/api/user/', {
            method: 'delete',
            body: JSON.stringify({
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok)
            location.replace('/dashboard');
        else if (response.status === 400){
            const responseJson = await response.json();
            alert(responseJson.message);
        }
    }
}


// EVENT LISTENER
$('#delete-account-form').on('submit', deleteAccountFormHandler);
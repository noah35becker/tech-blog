
// FUNCTION
async function logout(){
    const response = await fetch('/api/user/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok || response.status === 401)
        location.replace('/');
    else
        alert(response.statusText);
}

// EVENT LISTENER
$('#logout').on('click', logout);
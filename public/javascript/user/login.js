
// FUNCTIONS

async function loginFormHandler(event){
    event.preventDefault();

    const email = $('#email-login').val().trim();
    const password = $('#password-login').val().trim();

    if (email && password){
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok)
            document.location.replace('/dashboard');
        else
            alert(response.statusText);
    }
}

async function signupFormHandler(event){
    event.preventDefault();

    const username = $('#username-signup').val().trim();
    const email = $('#email-signup').val().trim();
    const password = $('#password-signup').val().trim();

    if (username && email && password){
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok)
            document.location.replace('/dashboard');
        else
            alert(response.statusText);
    }
}



// EVENT LISTENERS
$('.login-form').on('submit', loginFormHandler);
$('.signup-form').on('submit', signupFormHandler);
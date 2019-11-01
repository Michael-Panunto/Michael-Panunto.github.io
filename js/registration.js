function validateForm() {
    // Grab each form element being used
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var uname = document.getElementById('uname');
    var pass = document.getElementById('pass');

    // Make sure first name is filled
    if (fname.value === '') {
        alert('Please enter your first name.');
        fname.focus();
        return false;
    }

    // Make sure last name is filled
    else if (lname.value === '') {
        alert('Please enter your last name.');
        lname.focus();
        return false;
    }

    // Make sure email is filled, and contains an @
    else if (email.value === '' || !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }

    // Make sure username is filled
    else if (uname.value === '') {
        alert('Please enter a username.');
        uname.focus();
        return false;
    }

    // Make sure password meets security req of 6+ characters
    else if (pass.value.length < 6) {
        alert('Password must be 6 characters or longer.');
        pass.focus();
        return false;
    }
    // Return true if all criteria is met
    return true;
}

// Submit the form
function submitForm() {
    // If the criteria was met, alert and redirect
    var formFilledOut = validateForm();
    if (formFilledOut) {
        alert('Account successfully created!')
        // Index of last '/' in the url
        var index = window.location.href.lastIndexOf('/');
        // Redirect the page by replacing the last /___ with where we want to go
        var url = window.location.href.slice(0, index) + '/index.html'
        window.location.href = url;
    }
}
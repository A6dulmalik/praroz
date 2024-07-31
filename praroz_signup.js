const form = document.getElementById('signForm');
const email = document.getElementById('email');
const uname = document.getElementById('username');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirmpassword');


// Password and email criteria/standard
function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    return /[A-Za-z\d@$!%?_&]{8,}$/.test(password);
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});


// Input value validation
function checkInput() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const unameValue = uname.value.trim();

    // email address validation
    if (emailValue === '') {
        setErrorfor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Invalid email address');
    } else {
        setSuccessfor(email);
    }

    // Username Validation
    if (unameValue === '') {
        setErrorfor(uname, 'Username cannot be blank');
    } else if (unameValue.length < 4) {
        setErrorfor(uname, 'Username cannot be less than 4 characters');
    } else {
        setSuccessfor(uname);
    }


    // password validation
    if (passwordValue === '') {
        setErrorfor(password, 'Password cannot be blank');
    } else if (!isValidPassword(passwordValue)) {
        setErrorfor(password, 'Password must contain an uppercase letter, a lowercase letter, a special character, and a number');
    } else if (passwordValue.length < 8) {
        setErrorfor(password, 'Password cannot be less than eight characters');
    } else {
        setSuccessfor(password);
    }


    // Password check
    if (cpasswordValue === '') {
        setErrorfor(cpassword, 'Password cannot be blank');
    } else if (cpasswordValue != passwordValue) {
        setErrorfor(cpassword, 'Passwords do not match');
    } else {
        setSuccessfor(cpassword);
    }
}



function setErrorfor(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = message;
    formcontrol.className = 'form-control error';
}

function setSuccessfor(input) {
    const formcontrol = input.parentElement;

    formcontrol.className = 'form-control success';
}
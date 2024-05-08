
 
function Ashoka() {
     event.preventDefault();

    let name = document.getElementById('name').value;
    let Phonenumber = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll('input[name="interests"]:checked');

    let successMsg = document.getElementById('message');
    let errorMsg = document.getElementById('error-message')

    if (name === "") {
        errorMsg.innerHTML = "Please, fill in your name"
    }
    else if (Phonenumber === "") {
        errorMsg.textContent = "Please, fill in your Phone number"
    }
    else if (email === "") {
        errorMsg.textContent = "fill in your email details "
    }
    else if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters"
    }
    else if (!gender) {
        errorMsg.textContent = "Select a gender";
    }
    else if (interests) {
        errorMsg.textContent = "select all the intrest"
    }
    else {
        alert('Form has been submitted');
        successMsg.textContent= "Form submitted successfully";
    }
    window.location.href = 'index.html';
}
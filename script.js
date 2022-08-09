const form = document.querySelector('form'); 
const password1 = document.getElementById('password'); 
const password2 = document.getElementById('confirm-password'); 

form.addEventListener('submit', e => {
    const errorMsg = document.querySelector('.error-msg');
    console.log(password1.value);
    console.log(password2.value);
    if(password1.value !== password2.value) {
        e.preventDefault();
        password1.classList.toggle('error');
        password2.classList.toggle('error');
        errorMsg.textContent = "* Passwords do not match"; 
    }
    else {
        password1.classList.toggle('error');
        password2.classList.toggle('error');
        errorMsg.textContent = ""; 
    }
})


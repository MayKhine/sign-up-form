const signUpForm = document.getElementById("sign-up-form")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const signUpButton = document.getElementById("submit")
const errorMsg = document.getElementById("error")
const signUpHeader = document.querySelector('.sign-up-header')

signUpHeader.innerHTML = 'This is not a real thing. Sign up now!'
errorMsg.innerHTML = 'Passwords do not match.'

const validateTheForm = (event) => {
    console.log(event)
    console.log(password.value, password2.value)
    //password validation
    if (password.value != password2.value) {
        // alert('Passwords do not match.')
        errorMsg.style.color = "red";
        return false
    } else {
        errorMsg.style.color = "white";
        return true
    }

}

signUpForm.addEventListener('submit', (e) => {
    console.log('HEYYYYYYY')
    console.log(e)

    if (!validateTheForm()) {
        e.preventDefault()
    }
})
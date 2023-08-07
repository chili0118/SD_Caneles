'use strict'
const form = document.querySelector('#form');
const userName = document.querySelector('#userName');
const userPhone = document.querySelector('#userPhone')
const userEmail = document.querySelector('#userEmail')
const userMessage = document.querySelector('#userMessage')
const submitButton = document.querySelector('#submit-button')
const btnText = document.querySelector('#btnText')
const formRowContainer = document.querySelector('.form-row-container')

// Set Error Message
function setError(input, errormsg) {
    const validationContainer = input.parentElement;
    const validation = validationContainer.querySelector(".validation");
    validationContainer.className = "validation-container error";
    validation.innerText = errormsg;
}

// Set Success Message
function setSuccess(input) {
    const validationContainer = input.parentElement;
    validationContainer.className = "validation-container success";
}
function validName(input) {
    const regexName = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
    if (regexName.test(input.value.trim())) {
        setSuccess(input);
    } else {
        setError(input, "Your name is not valid");
    }
}
// check tel is valid
function validTel(input) {
    const regexTel = /^[\+]?[(]?[0]{1}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im
    if (regexTel.test(input.value.trim())) {
        setSuccess(input)
    } else {
        setError(input, 'Phone number is not valid');
    }
}

//check email is valid
function validEmail(input) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(input.value.trim())) {
        setSuccess(input)
    } else {
        setError(input, 'Email is not invalid');
    }
}
function validMessage(input) {
    if (userMessage.value.trim()) {
        setSuccess(input);
    } else {
    setError(input, "Message can't be blank");
    }
}

//checkRequired fields //!!!IMPORTANT
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            setError(input, `${getFieldName(input)} is required`)
        } else {
            setSuccess(input);
        }
    })
}
function validForm(inputArr) {
    let n = 0
    inputArr.forEach(function (input) {
        const validationContainer = input.parentElement;
        if (validationContainer.classList.contains("success")) {
            n++
        }
    })
    if (n === 4) {
        formRowContainer.classList.add('submitted');
        btnText.innerHTML = 'Thanks';
        submitButton.classList.add('submitButton-active');
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([userName, userPhone, userEmail, userMessage]);
    validName(userName)
    validTel(userPhone);
    validEmail(userEmail);
    validForm([userName, userPhone, userEmail, userMessage])
});
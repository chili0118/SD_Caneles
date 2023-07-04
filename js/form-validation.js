'use strict'
const form = document.querySelector('#form');
const username = document.querySelector('#userName');
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

//check email is valid
function validEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
        setSuccess(input)
  }else {
    setError(input,'Email is not invalid');
  }
}

//checkRequired fields //!!!IMPORTANT
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            setError(input,`${getFieldName(input)} is required`)
        } else {
            setSuccess(input);
        }
    })
}
function validForm(inputArr) {
  let n = 0
  inputArr.forEach(function(input) {
    const validationContainer = input.parentElement;
    if(validationContainer.classList.contains("success")) {
       n++
    }
  })
  if(n === 4) {
    formRowContainer.classList.add('submitted');
      btnText.innerHTML = 'Thanks';
      submitButton.classList.add('active');
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([userName, userPhone, userEmail, userMessage]);
    validEmail(userEmail);
 validForm([userName, userPhone, userEmail, userMessage])
});
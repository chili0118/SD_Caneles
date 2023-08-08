'use strict'
// footer 訂閱電子報驗證
function validationNewsletter() {
    const newsletterForm = document.querySelector('#newsletterForm');
    const newsletterInput = document.querySelector('#newsletter').value.trim()
    const newsletterMsg = document.querySelector("#newsletterMsg");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const modalContainer = document.querySelector(".modal-container")
    const popBtn = document.querySelector(".pop-btn")
    const X = document.querySelector(".x")

    function appear(event) {
        modalContainer.style.visibility = "visible";
        newsletterMsg.style.visibility = "hidden";
        event.preventDefault()
        document.querySelector('#newsletter').value=""
        popBtn.style.visibility = "hidden";
    }
    function disappearX() {
        if (newsletterInput.match(pattern)) {
            modalContainer.style.visibility = "hidden";
        }
    }
    function disappearModalContainer(e) {
        if (newsletterInput.match(pattern)) {
            if (e.target.className === "modal-container") {
                modalContainer.style.visibility = "hidden";
            }
        }
    }
    function validateMailPattern() {
        const newsletterSpace = document.querySelector('#newsletter')
        if (newsletterInput === "") {
            newsletterForm.classList.remove("valid");
            newsletterForm.classList.remove("invalid");
            newsletterMsg.innerHTML = "";
            modalContainer.style.visibility = "hidden";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                    return 
                }
            })
            
        } else if (newsletterInput.match(pattern)) {
            newsletterForm.classList.add("valid");
            newsletterForm.classList.remove("invalid");
            newsletterMsg.style.visibility = "visible";
            newsletterMsg.innerHTML = "Your Email Address is valid &#10003;";
            newsletterMsg.style.color = "#00ff00";
            popBtn.style.visibility = "visible";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                    appear(event)
                }
            })
        } else {
            newsletterForm.classList.remove("valid");
            newsletterForm.classList.add("invalid");
            newsletterMsg.style.visibility = "visible";
            newsletterMsg.innerHTML = "Please enter valid Email Address";
            newsletterMsg.style.color = "#ff0000";
            popBtn.style.visibility = "hidden";
            
            newsletterSpace.addEventListener("keypress", function(event) {
                if(event.keyCode === 13) { 
                    event.preventDefault()
                }
            })
        } 
        
    }
    validateMailPattern()
    popBtn.addEventListener("click", appear);
    X.addEventListener("click", disappearX);
    modalContainer.addEventListener("click", disappearModalContainer)
}
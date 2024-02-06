let email = document.querySelector(".settings-page .email")
let changeBtn = document.querySelector(".settings-page .change-btn")

changeBtn.addEventListener("click", function () {
    email.removeAttribute("disabled")
    email.setAttribute("value", "");
    email.setAttribute("placeholder", "Enter Your Email");

})

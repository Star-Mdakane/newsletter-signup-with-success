const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    let emailValue = email.value;
    console.log(email)
    const validEmail = validateEmail(email);
    if (!validEmail) {
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("email", emailValue);
        form.submit()
    } else {
        form.querySelector(":invalid").focus();
    }
})

function validateEmail(email) {
    const error = form.querySelector("#error");

    if (!email.validity.valid) {
        error.textContent = "Valid email required";
        return false
    } else {
        error.textContent = "";
        return true
    }
}

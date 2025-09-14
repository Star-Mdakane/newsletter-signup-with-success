const form = document.querySelector("form");
const sucBtn = document.querySelector("#successBtn");

document.addEventListener("DOMContentLoaded", () => {
    const emailValue = localStorage.getItem("email");

    if (emailValue) {
        const msg = document.querySelector("#suc-msg");
        if (msg) {
            msg.textContent = ` A confirmation email has been sent to ${emailValue}.
                Please open it and click the button inside to confirm your subscription.`
        }
    }
})

sucBtn.addEventListener("click", () => {
    localStorage.clear();
})
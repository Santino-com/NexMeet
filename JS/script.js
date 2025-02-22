document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    const registerContainer = document.querySelector(".register-container");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    if (showRegister) {
        showRegister.addEventListener("click", function (event) {
            event.preventDefault();
            loginContainer.style.display = "none";
            registerContainer.style.display = "block";
        });
    }

    if (showLogin) {
        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            registerContainer.style.display = "none";
            loginContainer.style.display = "block";
        });
    }
});
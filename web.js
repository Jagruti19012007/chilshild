// ===============================
// CHILDSAFE WEBSITE JAVASCRIPT
// ===============================


// 1. MOBILE MENU
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}


// 2. REGISTER FORM
const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#registerEmail").value;
        const password = document.querySelector("#registerPassword").value;
        const confirmPassword =
            document.querySelector("#confirmPassword").value;

        // Check password
        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;
        }

        alert(
            "Registration successful! Welcome " + name
        );

        registerForm.reset();
    });
}


// 3. LOGIN FORM
const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.querySelector("#loginEmail").value;

        const password =
            document.querySelector("#loginPassword").value;

        if (email === "" || password === "") {

            alert("Please enter email and password.");

            return;
        }

        alert("Login successful!");

        loginForm.reset();
    });
}


// 4. REPORT FORM
const reportForm = document.querySelector("#reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.querySelector("#reportName").value;

        const email =
            document.querySelector("#reportEmail").value;

        const concern =
            document.querySelector("#concern").value;

        const description =
            document.querySelector("#description").value;


        if (
            name === "" ||
            email === "" ||
            concern === "" ||
            description === ""
        ) {

            alert("Please fill all the fields.");

            return;
        }


        alert(
            "Your report has been submitted successfully."
        );

        reportForm.reset();
    });
}


// 5. WELCOME MESSAGE
window.addEventListener("load", function() {

    console.log(
        "Welcome to ChildSafe Website!"
    );

});


// 6. CURRENT YEAR IN FOOTER
const year = document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();
}
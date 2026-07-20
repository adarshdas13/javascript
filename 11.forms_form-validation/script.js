const form = document.querySelector("#myForm");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset previous errors before validating again
    resetErrors();

    let isValid = true;

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Password Regex: Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special character (allows any standard special char)
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    // 1. Email check
    if (!emailRegex.test(email.value.trim())) {
        showError(email, emailError, "Please enter a valid email address.");
        isValid = false;
    }

    // 2. Password check
    if (!passRegex.test(pass.value)) {
        showError(
            pass, 
            passError, 
            "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character."
        );
        isValid = false;
    }

    // 3. Submit action if valid
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
    }
});

// Helper function to display errors
function showError(inputField, errorSpan, message) {
    inputField.classList.add("invalid");
    errorSpan.textContent = message;
}

// Helper function to clear errors on re-submission
function resetErrors() {
    email.classList.remove("invalid");
    pass.classList.remove("invalid");
    emailError.textContent = "";
    passError.textContent = "";
}
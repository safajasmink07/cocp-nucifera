// JavaScript for Sign-Up Page

document.addEventListener('DOMContentLoaded', () => {
    // Elements for sign up and verification
    const emailForm = document.querySelector('.email-signup');
    const verifyForm = document.querySelector('.verify-code1');
    const googleSignUpButton = document.querySelector('.google-signup');
    const signUpButton = document.querySelector('.email-signup button');
    const verifyButton = document.querySelector('.verify-code button');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const codeInput = document.getElementById('code');

    // Handle Google sign up button (example)
    googleSignUpButton.addEventListener('click', () => {
        alert('Redirecting to Google Sign Up...');
        // Add Google OAuth or API integration here.
    });

    // Handle email/password form submission
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple validation check
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Fake sending the form data to a server (e.g., via fetch)
        console.log('Sending data to server:', { email, password });

        // Show verification section after form submission
        emailForm.style.display = 'none';  // Hide the sign-up form
        verifyForm.style.display = 'block';  // Show verification section

        // Simulate sending a verification code (this is where you'd trigger an API call)
        alert('A verification code has been sent to your email/phone.');
    });

    // Handle verification form submission
    verifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const code = codeInput.value;

        // Simple validation for code input
        if (!code) {
            alert('Please enter the verification code.');
            return;
        }

        // Fake verification code check (you would actually check the code on your server)
        console.log('Verifying code:', code);
        if (code === '123456') {  // Assuming '123456' is the correct verification code
            alert('Account successfully verified! Welcome aboard.');
            // Redirect user to a welcome page or dashboard
            window.location.href = 'user-dashboard.html';  // Example redirection
        } else {
            alert('Invalid code. Please try again.');
        }
    });

    // Optional: Enhance password field with some validation on input (e.g., length check)
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 6) {
            passwordInput.setCustomValidity('Password must be at least 6 characters long');
        } else {
            passwordInput.setCustomValidity('');
        }
    });
});

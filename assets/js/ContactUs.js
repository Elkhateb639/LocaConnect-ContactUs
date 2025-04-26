document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Flag to track if there are any errors
    let hasErrors = false;

    // Name validation
    if (!name) {
        nameError.textContent = 'Name is required';
        hasErrors = true;
    } else {
        // Check if name contains only letters and spaces
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            nameError.textContent = 'Name must contain only letters and spaces';
            hasErrors = true;
        }
    }

    // Email validation
    if (!email) {
        emailError.textContent = 'Email is required';
        hasErrors = true;
    } else {
        // Check for valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            hasErrors = true;
        }
    }

    // Message validation
    if (!message) {
        messageError.textContent = 'Message is required';
        hasErrors = true;
    } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        hasErrors = true;
    }

    // If there are no errors, show the success pop-up and reset the form
    if (!hasErrors) {
        const popup = document.getElementById('successPopup');
        popup.style.display = 'flex';
        document.getElementById('contactForm').reset();
    }
});

// Close the pop-up when the close button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
});
const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Function to control the visibility of the "Existing User" button
function toggleExistingButton() {
    const savedName = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');

    // Show button only if BOTH credentials exist
    if (savedName && savedPass) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

// RUN ON PAGE LOAD: Ensure button state is correct immediately
toggleExistingButton();

// 1. Handle Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove from localStorage if unchecked
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Requirement: alert("Logged in as <username>")
    alert("Logged in as " + username);

    // Update button visibility after submission
    toggleExistingButton();
});

// 2. Handle Existing User Login
existingBtn.addEventListener('click', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        alert("Logged in as " + savedName);
    }
});
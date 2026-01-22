const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Function to check localStorage and show/hide button
function checkCredentials() {
    const savedName = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');

    if (savedName && savedPass) {
        existingBtn.style.display = "block"; // Show button
    } else {
        existingBtn.style.display = "none";  // Hide button
    }
}

// Run immediately when page loads
checkCredentials();

// 1. Submit Logic
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const u = usernameInput.value;
    const p = passwordInput.value;

    if (checkbox.checked) {
        localStorage.setItem('username', u);
        localStorage.setItem('password', p);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert("Logged in as " + u);
    checkCredentials(); // Update button visibility after submit
});

// 2. Existing User Button Logic
existingBtn.addEventListener('click', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        alert("Logged in as " + savedName);
    }
});
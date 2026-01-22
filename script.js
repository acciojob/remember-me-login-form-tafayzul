const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Function to control button visibility
function updateUI() {
    const savedName = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');

    // Requirement: Only show if credentials are saved
    if (savedName && savedPass) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

// Run immediately on page load to check localStorage
updateUI();

// 1. Handle Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        // Save credentials
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Clear credentials if "Remember me" is NOT checked
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Exact alert required by requirements
    alert("Logged in as " + username);
    
    // Refresh button visibility
    updateUI();
});

// 2. Handle Existing User Login Button
existingBtn.addEventListener('click', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        alert("Logged in as " + savedName);
    }
});
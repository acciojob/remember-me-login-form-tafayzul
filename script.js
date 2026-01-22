const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// 1. Initial Check: Show/Hide the button on page load
function checkExistingUser() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

checkExistingUser();

// 2. Form Submission Logic
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    const isChecked = checkbox.checked;

    if (isChecked) {
        // Save individual credentials
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove only these specific credentials
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    
    // Refresh button visibility after submission
    checkExistingUser();
});

// 3. Existing User Login Logic
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    // The requirement only asks for the alert when clicking this button
    alert(`Logged in as ${savedUsername}`);
});
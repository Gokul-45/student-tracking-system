// This JavaScript will handle switching between Student and Admin Login

document.getElementById('switch-btn').addEventListener('click', function() {
    const title = document.getElementById('login-title');
    const switchBtn = document.getElementById('switch-btn');
    
    if (title.textContent === "Student Login") {
        title.textContent = "Admin Login";
        switchBtn.textContent = "Switch to Student Login";
    } else {
        title.textContent = "Student Login";
        switchBtn.textContent = "Switch to Admin Login";
    }
});

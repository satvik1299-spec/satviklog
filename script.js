let attempts = 3;

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const loginBtn = document.querySelector('.login-btn');
    
    // Demo credentials
    if (username === 'admin' && password === 'password123') {
        message.textContent = 'Login successful! Redirecting...';
        message.className = 'message success';
        loginBtn.textContent = 'Redirecting...';
        loginBtn.disabled = true;
        
        // Save login state and redirect
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        
        setTimeout(() => {
            window.location.href = 'todo.html';
        }, 1500);
        
    } else {
        attempts--;
        message.textContent = `Wrong credentials! ${attempts} attempts remaining.`;
        message.className = 'message error';
        
        if (attempts === 0) {
            message.textContent = 'Account locked! Contact admin.';
            document.getElementById('username').disabled = true;
            document.getElementById('password').disabled = true;
            loginBtn.disabled = true;
            loginBtn.textContent = 'Locked';
        }
    }
});
// Admin login functionality
function handleLogin(username, password) {
    // Valid credentials
    const validCredentials = [
        { username: 'Manager', password: 'manager123' },
        { username: 'FrontDesk', password: 'desk123' },
        { username: 'Owner', password: 'owner123' }
    ];

    // Check credentials
    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        // Store user info in session
        sessionStorage.setItem('user', username);
        // Redirect to dashboard
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Check if user is logged in when accessing admin pages
function checkAuth() {
    const user = sessionStorage.getItem('user');
    if (!user && !window.location.pathname.includes('admin.html')) {
        window.location.href = 'admin.html';
    }
    return user;
}

// Logout functionality
function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'admin.html';
}
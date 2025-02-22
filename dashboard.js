// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const user = sessionStorage.getItem('user');
    if (!user) {
        window.location.href = 'admin.html';
        return;
    }

    // Set user name in dashboard
    document.getElementById('userName').textContent = user;

    // Initialize dashboard
    initializeDashboard();
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update sidebar active state
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function initializeDashboard() {
    // Add any initialization logic here
    // For example, loading initial data, setting up charts, etc.
}
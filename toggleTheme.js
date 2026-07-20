const body = document.body;
const toggleBtn = document.getElementById('themeBtn');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    updateButtonText();
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Save current theme
    localStorage.setItem('theme', body.className);
    
    updateButtonText();
});

// Update button text based on current theme
function updateButtonText() {
    if (body.classList.contains('dark')) {
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
}
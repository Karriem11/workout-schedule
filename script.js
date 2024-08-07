// Function to toggle dark and light modes
function toggleMode() {
    const body = document.body;
    const currentMode = body.getAttribute('data-mode');

    if (currentMode === 'dark') {
        body.setAttribute('data-mode', 'light');
        body.style.backgroundColor = '#f0f0f0'; // Light background color
        body.style.color = '#333'; // Dark text color
        document.querySelector('.container').style.backgroundColor = '#ffffff'; // Light container background
        document.querySelectorAll('h1, h2').forEach(el => el.style.color = '#333'); // Dark heading color
        document.querySelectorAll('h3').forEach(el => el.style.color = '#555'); // Dark subheading color
        document.querySelectorAll('.note').forEach(el => el.style.color = '#666'); // Dark note color
    } else {
        body.setAttribute('data-mode', 'dark');
        body.style.backgroundColor = '#121212'; // Dark background color
        body.style.color = '#e0e0e0'; // Light text color
        document.querySelector('.container').style.backgroundColor = '#1e1e1e'; // Dark container background
        document.querySelectorAll('h1, h2').forEach(el => el.style.color = '#b0bec5'); // Light gray heading color
        document.querySelectorAll('h3').forEach(el => el.style.color = '#90a4ae'); // Slightly darker gray subheading color
        document.querySelectorAll('.note').forEach(el => el.style.color = '#b0bec5'); // Light gray note color
    }
}

// Event listener for the mode toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');
    toggleButton.addEventListener('click', toggleMode);

    // Initialize the mode based on the current setting
    if (!document.body.hasAttribute('data-mode')) {
        document.body.setAttribute('data-mode', 'dark');
    }
});

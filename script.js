document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-update-tab');
    const updateTab = document.querySelector('.update-tab');

    toggleButton.addEventListener('click', function() {
        updateTab.classList.toggle('open');
    });
});

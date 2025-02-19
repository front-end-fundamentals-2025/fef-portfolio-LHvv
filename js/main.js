document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const mainSection = document.querySelector('.main'); 

    toggleButton.addEventListener('click', function() {
        mainSection.classList.toggle('black-mode');

        if (mainSection.classList.contains('black-mode')) {
            toggleButton.textContent = 'Light Mode'; 
        } else {
            toggleButton.textContent = 'Dark Mode'; 
        }
    });
});
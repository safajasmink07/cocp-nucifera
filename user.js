document.addEventListener('DOMContentLoaded', function () {
    // Get all the section divs
    const sections = document.querySelectorAll('.dashboard-section');
    const buttons = document.querySelectorAll('.btn');

    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Initially hide all sections and show the profile section by default
    sections.forEach(section => section.style.display = 'none');
    showSection('profile');

    // Attach event listeners to the navigation buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-target'); // Use data-target attribute to store the section ID
            showSection(targetSection);
        });
    });

    // Wishlist removal functionality
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const item = event.target.parentElement;
            item.remove();
        });
    });
});

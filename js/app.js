// 1. Sticky Navigation Bar on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. DOM Manipulation: Project Filtering System
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons, add to the clicked one
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Get the category from the button's data-filter attribute
        const filterValue = btn.getAttribute('data-filter');

        // Loop through all project cards
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            // If the filter is 'all' or matches the card's category, show it
            if (filterValue === 'all' || filterValue === category) {
                card.classList.remove('hide');
            } else {
                // Otherwise, hide it using CSS
                card.classList.add('hide');
            }
        });
    });
});
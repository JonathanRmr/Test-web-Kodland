const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu active');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuLinks.forEach(link => {
        
    });
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu__link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && 
        !mobileMenu.contains(e.target) && 
        mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});
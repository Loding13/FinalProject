const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }
});
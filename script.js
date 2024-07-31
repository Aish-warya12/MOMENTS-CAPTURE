document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('#side-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
    });

    closeMenu.addEventListener('click', function () {
        sideMenu.classList.remove('open');
    });
});
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

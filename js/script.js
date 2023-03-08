const navbarNav = document.querySelector('.navbar-nav');
// ketika di klik humberger
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
//menututp sidebar ketika di klik di layar bebas
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
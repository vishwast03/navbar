const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    links.classList.toggle('link-active');
});
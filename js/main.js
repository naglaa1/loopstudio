const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementsByClassName('nav-links')[0];

const navClass = document.getElementsByClassName("header")[0];
// const infoClass = document.getElementsByClassName(".header-info")[0];
console.log(navClass);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navClass.classList.toggle('color');
    // infoClass.classList.toggle('hidden');
});

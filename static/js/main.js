let headerTitle = document.getElementById('title__principal');
let headerNav = document.getElementById('navigation__principal');
let navLinks = document.getElementsByClassName('navigation__link');
let headerContainer = document.querySelector('header > div');
window.addEventListener('scroll', function(){
    headerTitle.classList.toggle('header__title--scroll', scrollY > 0);
    headerNav.classList.toggle('header__navigation--scroll', scrollY > 0);
    if(scrollY > 0){
        headerContainer.style = 'background: var(--primary-color);height:10rem;transition:all 0.5s;';
    }
    else if(scrollY==0){
        headerContainer.style = 'background: transparent;'
    }
});
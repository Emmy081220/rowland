function toggleMenu() {
    const toggleBtn = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLink = document.querySelectorAll('.nav-link');

    toggleBtn.onclick = function() {
        navMenu.classList.toggle('active');
    }


    navLink.forEach(navLink => {
        navLink.onclick = function() {
            navMenu.classList.remove('active')
        }
    }) 
}
toggleMenu();

// LIGHT SLIDER ACTIVATION
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});



/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
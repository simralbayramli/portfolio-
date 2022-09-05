
function openNavbar(){
    document.querySelector("#navBar").style.width="20%"
}

window.sr = ScrollReveal();
sr.reveal('.left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300,
})
ScrollReveal().reveal('.portfolio-creator',{delay:250});
ScrollReveal().reveal('.testimonialsimg',{delay:500});
ScrollReveal().reveal('.faq',{delay:750});
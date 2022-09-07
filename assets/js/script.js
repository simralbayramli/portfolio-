var mobilMenu=document.getElementById("mobilMenu");
mobilMenu.style.maxHeight="0px";
function menuTaggle(){
    if(mobilMenu.style.maxHeight=="0px"){
        mobilMenu.style.maxHeight="200px"
    }else{
        mobilMenu.style.maxHeight="0px"
    }


}

window.sr = ScrollReveal();
sr.reveal('.left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300,
})
window.sr = ScrollReveal();
sr.reveal('.top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300,})
ScrollReveal().reveal('.portfolio-creator',{delay:250});
ScrollReveal().reveal('.testimonialsimg',{delay:500});
ScrollReveal().reveal('.faq',{delay:750});
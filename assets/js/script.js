var mobilMenu=document.getElementById("mobil-Menu");
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

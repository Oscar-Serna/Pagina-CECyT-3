const menuEduOffer = document.querySelector('.menuEduOffer');
const screenWidth = window.screen.width;

console.log(screenWidth);

if(screenWidth <= 864){
    menuEduOffer.style = 'overflow-x: scroll;';
}
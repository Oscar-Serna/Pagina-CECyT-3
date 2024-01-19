const loadingPage = document.querySelector('.loadingPage');
const contChargeLoadingP = document.querySelector('.contChargeLoadingP');

function enableScroll(){
    document.querySelector('html').style = 'overflow: auto';;
}

function disableScroll(){
    document.querySelector('html').style = 'overflow: hidden';;
}

function StopLoadingPage(){
    loadingPage.classList.replace('loadingP-A', 'loadingP-I');
}

function StopAnimation(){
    contChargeLoadingP.style = 'animation-play-state: paused;';
}

addEventListener('load', () => {
    StopLoadingPage();
    enableScroll();
    setTimeout(() => {
        StopAnimation();
    }, 1000);
    mouseSlider = false;
})
setTimeout(() => {
    document.querySelector('.secondTitleLP').textContent = `Seguiremos cargando en segundo plano`;
    setTimeout(() => {
        StopLoadingPage();
        StopAnimation();
        enableScroll();
    }, 750);

}, 4500);

// HORARIO DE ATENCIÓN

function SetHoraryMessengerWindow(){
    document.querySelector('main').innerHTML += `
        <section class="sectionHoraryMessenger">
            <h3>Horario de atención:</h3>
            <p>9:00 am - 7:00 pm</p>
        </section>
    `
}
SetHoraryMessengerWindow();
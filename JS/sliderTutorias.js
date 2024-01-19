const textNumPS = document.querySelector('.textNumPS');
const sectSliderM = document.querySelector('.sectSliderM');
const artProgressSlider = document.querySelector('.artProgressSlider');
const buttonShowImage = document.querySelector('.buttonShowContentS');
const previewImageSlider = document.querySelector('.previewImageSlider');
let contBallsPS = document.querySelector('.contBallsPS');
const itemListCS = document.querySelectorAll('.itemListCS');
const mainTitleLCS = document.querySelectorAll('.mainTitleLCS');
const textInfoLCS = document.querySelectorAll('.textInfoLCS');
const contArrowS = document.querySelectorAll('.contArrowS');
const aElementSlider = document.querySelectorAll('.aElementSlider');
const imgBtnSCS = document.querySelectorAll('.imgBtnSCS');
const contInfoLCS = document.querySelectorAll('.contInfoLCS');
const elementOpaque = document.querySelectorAll('.elementOpaque');
let bodu = document.querySelector('body');
let mouseSlider = true;
let numberInterval = 0;
let numArrowFSlider = 0;


/*
    - ARREGLO DE IMAGENES DEL SLIDER
    - AL INSERTAR ELEMENTOS, ORDERNAR DEL PRIMERO AL ULTIMO
    - SOLO PONER EL NOMBRE DE LA IMAGEN Y EL TIPO DE IMAGEN QUE ES
*/

function SetBallsSlider(){
    // ASIGNAMOS ID A LOS CIRCULOS DEL SLIDER
    for(let i = 0; i < itemListCS.length; i++){
        contBallsPS.innerHTML += `<div class="ballPS ballPS-I" id="${i}"></div>`;
        textNumPS.textContent = `1 / ${itemListCS.length}`;
    }
    // ASIGNAMOS ID A LAS FLECHAS DEL SLIDER
    for(let i = 0; i < contArrowS.length; i++){
        contArrowS[i].id = i;
    }
    contArrowS[0].id = itemListCS.length - 1;
}

sectSliderM.addEventListener('click', event => {
    const target = event.target;
    // EVENTOS PASAR Y RETRASAR SLIDER - FLECHAS
    if(target.classList.contains('contArrowS')){
        let id = parseInt(target.id);
        let type = target.classList[1];

        ChangeItemSlider(id);
        ChangeNumItemSlider(id, type);

        numberInterval = id;
        numArrowFSlider = id;
    } else if(target.classList.contains('arrowS')){
        let id = parseInt(target.parentNode.id);
        let type = target.parentNode.classList[1];

        ChangeItemSlider(id);
        ChangeNumItemSlider(id, type);

        numberInterval = id;
        numArrowFSlider = id;
    }

    // EVENTOS PASAR Y RETRASAR SLIDER - BOLAS
    if(target.classList.contains('ballPS')){
        let id = parseInt(target.id);

        ChangeItemSlider(id);
        ChangeNumItemSlider(id);

        numberInterval = id;
        numArrowFSlider = id;
    }
})

// EVENTOS DE TOUCH SLIDER - DESLIZAMIENTO DERECHA E IZQUIERDA
let startX, startY, distance, distanceTraveled = 100, maxTime = 200, timeDuration, startTime;

sectSliderM.addEventListener('touchstart', event => {
    if(event.target.classList.contains('itemListCS')){
        let nodeTouch = event.changedTouches[0];
        distance = 0;
        startX = nodeTouch.pageX;
        startY = nodeTouch.pageY;
        startTime = new Date().getTime();
        mouseSlider = true;
    }
}, false)

sectSliderM.addEventListener('touchend', event => {
    if(event.target.classList.contains('itemListCS')){
        mouseSlider = true;
        let nodeTouch = event.changedTouches[0];
        distance = nodeTouch.pageX - startX;
        timeDuration = new Date().getTime() - startTime;
        mouseSlider = true;
        if(timeDuration <= maxTime && distance <= distanceTraveled - 30 && Math.abs(nodeTouch.pageY - startY <= 100) && Math.abs(nodeTouch.pageY - startY != 0)){
            mouseSlider = true;
            numArrowFSlider++;

            if(numArrowFSlider >= itemListCS.length){numArrowFSlider = 0}

            numberInterval = numArrowFSlider;

            ChangeNumItemSlider(numArrowFSlider);
            ChangeItemSlider(numArrowFSlider);

        }else if(timeDuration <= maxTime && distance >= distanceTraveled && Math.abs(nodeTouch.pageY - startY <= 100) && Math.abs(nodeTouch.pageY - startY != 0)){
            mouseSlider = true;
            numArrowFSlider--;

            if(numArrowFSlider < 0){numArrowFSlider = itemListCS.length - 1;}

            numberInterval = numArrowFSlider;

            ChangeNumItemSlider(numArrowFSlider);
            ChangeItemSlider(numArrowFSlider);
        }
        mouseSlider = false;
    }
}, false)

function ChangeItemSlider(id){
    const ballPS = document.querySelectorAll('.ballPS');
    for(let i = 0; i < itemListCS.length; i++){
        // REMPLAZAMOS CLASES PARA ANIMACIONES
        // ITEM DEL SLIDER
        if(itemListCS[i].classList.contains('itemLCS-A')){itemListCS[i].classList.replace('itemLCS-A', 'itemLCS-I');}
        // BOLITAS DEL SLIDER
        if(ballPS[i].classList.contains('ballPS-A')){ballPS[i].classList.replace('ballPS-A', 'ballPS-I');}
        if(id === i){
            // REMPLAZAMOS CLASES PARA AGREGAR LA ANIMACION AL ELEMENTO ACTUAL Y QUITARLOS A LOS DEMÁS
            itemListCS[i].classList.replace('itemLCS-I', 'itemLCS-A');
            ballPS[i].classList.replace('ballPS-I', 'ballPS-A');
        }
    }
}

function ChangeNumItemSlider(id, type){
    // CAMBIAMOS EL NUMERO DE SLIDER EN EL TEXTO
    textNumPS.textContent = `${id + 1} / ${itemListCS.length}`
    // CAMBIAMOS EL ITEM DEL UL SLIDER
    let idFirst = id;
    let idSecond = id;
    // PREGUNTAMOS EN QUE TIPO DE FLECHA SE DIO CLICK
    if(type === 'AS-R'){
        // FLECHA DERECHA
        if(idFirst >= itemListCS.length - 1){idFirst = -1;};
        contArrowS[1].id = idFirst + 1;
        if(idSecond === 0){idSecond = itemListCS.length}
        contArrowS[0].id = idSecond - 1;
        return;
    }
    // FLECHA IZQUIERDA
    if(idSecond <= 0){idSecond = itemListCS.length};
    contArrowS[0].id = idSecond - 1;
    if(idFirst >= itemListCS.length - 1){idFirst = -1;}
    contArrowS[1].id = idFirst + 1;
}


function ImgShowContentSlider(type){
    if(type === "active"){
        imgBtnSCS[1].classList.replace("imgBtnSCS-A", "imgBtnSCS-I");
        imgBtnSCS[0].classList.replace("imgBtnSCS-I", "imgBtnSCS-A");
        document.querySelector('.textBtnSCS').textContent = "Mostrar textos";
        return;
    }
    imgBtnSCS[0].classList.replace("imgBtnSCS-A", "imgBtnSCS-I");
    imgBtnSCS[1].classList.replace("imgBtnSCS-I", "imgBtnSCS-A");
    document.querySelector('.textBtnSCS').textContent = "Quitar textos";
}


// CONDICIONES DE MOUSE ENCIMA DE SLIDER
sectSliderM.addEventListener('mouseleave', () => {
    mouseSlider = false;
})
sectSliderM.addEventListener('mouseenter', () => {
    mouseSlider = true;
})

// SLIDER AUTOMÁTICO CADA 9000 MILISEGUNDOS
setInterval(() => {
    if(mouseSlider == false){
        numberInterval++;
        if(numberInterval >= itemListCS.length){numberInterval = 0}
        ChangeItemSlider(numberInterval);
        ChangeNumItemSlider(numberInterval);
        textNumPS.textContent = `${numberInterval + 1} / ${itemListCS.length}`;
        numArrowFSlider = numberInterval;
    }else{
        clearInterval();
    }
}, 9000);


// AÑADIMOS TARGETS "_blank" A ELEMENTOS QUE TENGAN UN HIPERVÍNCULO
function setTargetAnchorElementSlider(){
    for(let i = 0; i < aElementSlider.length; i++){
        let lastIndex = aElementSlider[i].href.length;
        if(aElementSlider[i].href[lastIndex - 1] === '#'){
            aElementSlider[i].target = "_parent";
        }else{
            aElementSlider[i].target = "_blank";
        }
    }
}

// BOTON DE MOSTRAR TEXTOS
// AÑADIMOS Y QUITAMOS LAS CLASES EN TODOS LOS ELEMENTOS
sectSliderM.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains("buttonShowContentS") || target.parentNode.classList.contains("buttonShowContentS")){
        buttonShowImage.id = numArrowFSlider;
        let numImage = buttonShowImage.id;
        let imageURL = `../../img/imgSliderTutorias/${arrInfoItemsSlider[numImage][0]}`;
        previewImageSlider.style = `background: url("${imageURL}"); background-position: center; background-repeat: no-repeat; background-size: contain;  background-color: rgba(0, 0, 0, .5);`;
        PreviewImageSlider();
    }
})

previewImageSlider.addEventListener('click', () => {
    PreviewImageSlider();
})

function PreviewImageSlider(){
    if(previewImageSlider.classList.contains('previewIS-I')){
        previewImageSlider.classList.replace('previewIS-I', 'previewIS-A');
        mouseSlider = true;
        return;
    }
    previewImageSlider.classList.replace('previewIS-A', 'previewIS-I');
    mouseSlider = false;
}

// EVENTOS DE FLECHAS DERECHA E IZQUIERDA DEL TECLADO
window.addEventListener('keyup', (event) => {
    const key = event.key;
    const topSectSlider = sectSliderM.getBoundingClientRect().top;
    // FLECHA IZQUIERDA
    if(key === "ArrowLeft" && topSectSlider > -334){
        numArrowFSlider--;
        if(numArrowFSlider < 0){numArrowFSlider = itemListCS.length - 1;}
        ChangeNumItemSlider(numArrowFSlider);
        ChangeItemSlider(numArrowFSlider);
        numberInterval = numArrowFSlider;
    }else if(key === "ArrowRight" && topSectSlider > -334){
        // FLECHA DERECHA
        numArrowFSlider++;
        if(numArrowFSlider >= itemListCS.length){numArrowFSlider = 0}
        ChangeNumItemSlider(numArrowFSlider, 'AS-R');
        ChangeItemSlider(numArrowFSlider);
        numberInterval = numArrowFSlider;
    }
})


document.addEventListener('DOMContentLoaded', () => {SetBallsSlider(); ChangeItemSlider(0); setTargetAnchorElementSlider()});
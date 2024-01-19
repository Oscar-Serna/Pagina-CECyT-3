const contArrowSlider = document.querySelectorAll('.contArrowSlider');
const itemListCS = document.querySelectorAll('.itemListCS');
const contBallsPS = document.querySelector('.contBallsPS');
const buttonShowContentS = document.querySelector('.buttonShowContentS');
const previewImageSlider = document.querySelector('.previewImageSlider');
const sectSliderM = document.querySelector('.sectSliderM');
const imagesItemListSlider = document.querySelectorAll('.itemListCS img');
let intervalSlider = undefined;
let initialMoveX = undefined;


[[0], [1]]

contArrowSlider.forEach((arrow, index) => {
    arrow.addEventListener('click', e => {
        switch(index){
            case 0:
                SetActivityItemSlider("left");
                ChangePositionItemSlider("left");
            break;
            ;
            case 1:
                SetActivityItemSlider("right");
                ChangePositionItemSlider("right");
            break;
            ;
        }
    })
});

contBallsPS.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains('ballPS')){
        const positionItem = parseInt(target.dataset.itemPosition);
        SetActivityItemSlider("ball", positionItem);
        SetDataArrows(null, null, "no-initial-balls", null, positionItem);
    }
})

sectSliderM.addEventListener('touchstart', e => {
    initialMoveX = e.changedTouches[0].pageX;
    StopAutomaticMoveSlider();
})

sectSliderM.addEventListener('touchend', e => {
    const moveingX = e.changedTouches[0].pageX;
    const lastMove = initialMoveX - moveingX;

    SelectionTouchSlider(lastMove);
    intervalSlider = setInterval(AutomaticMoveSlider, 8000);
})

buttonShowContentS.addEventListener('click', () => {ShowPreviewImage();})
previewImageSlider.addEventListener('click', () => {ShowPreviewImage();})
sectSliderM.addEventListener('mouseover', () => {StopAutomaticMoveSlider();})
sectSliderM.addEventListener('mouseleave', () => {intervalSlider = setInterval(AutomaticMoveSlider, 8000);})

function ChangePositionItemSlider(action){
    const lastImage = parseInt(contArrowSlider[0].dataset.lastImage);
    const nextImage = parseInt(contArrowSlider[1].dataset.nextImage);

    switch(action){
        case "firstItem":
            if(itemListCS[0].classList.contains('itemLCS-I')){
                itemListCS[0].classList.replace('itemLCS-I', 'itemLCS-A');
            }
        return;
        ;
        case "left":
            SetDataArrows(lastImage, nextImage, "no-initial", "left");
        return;
        ;
        case "right":
            SetDataArrows(lastImage, nextImage, "no-initial", "right");
        return;
        ;
    }
}
function SetDataArrows(lastImage, nextImage, situation, action, currentPosition){
    const leftArrow = contArrowSlider[0];
    const rightArrow = contArrowSlider[1];
    switch (situation) {
        case "initial":
                const lastPosition = itemListCS.length - 1;
                const nextPosition = 1;
                leftArrow.dataset.lastImage = lastPosition;
                rightArrow.dataset.nextImage = nextPosition;
            return;
        case "no-initial":
            switch (action) {
                case "left":
                    rightArrow.dataset.nextImage = TestArrowImagePosition("left", nextImage);
                    leftArrow.dataset.lastImage = TestArrowImagePosition("left", lastImage);
                return;

                case "right":
                    leftArrow.dataset.lastImage = TestArrowImagePosition("right", lastImage);
                    rightArrow.dataset.nextImage = TestArrowImagePosition("right", nextImage);
                return;
                ;
            }
        return;
        ;
        case "no-initial-balls":
            leftArrow.dataset.lastImage = TestArrowImagePosition("left", currentPosition);
            rightArrow.dataset.nextImage = TestArrowImagePosition("right", currentPosition);
        ;
        case "automatic":
            leftArrow.dataset.lastImage = TestArrowImagePosition("left", currentPosition);
            rightArrow.dataset.nextImage = TestArrowImagePosition("right", currentPosition);
        ;
    }
}
function SetDataPreviewImage(){
    const buttonShowContentS = document.querySelector('.buttonShowContentS');
    let currentPositionItemSlider = undefined;

    for(let i = 0; i < itemListCS.length; i++){
        if(itemListCS[i].classList.contains('itemLCS-A')){
            currentPositionItemSlider = i;
        }
    }

    buttonShowContentS.dataset.currentPositionImage = currentPositionItemSlider;
}
function TestArrowImagePosition(action, number){
    let numberReturned = undefined;
    switch (action) {
        case "left":
            numberReturned = number - 1;
        break;

        case "right":
            numberReturned = number + 1;
        break;
    }

    if(numberReturned < 0){
        numberReturned = itemListCS.length - 1;
    }else if(numberReturned >= itemListCS.length){
        numberReturned = 0;
    }
    return numberReturned;
}
function SetActivityItemSlider(type, position){
    for(let i = 0; i < itemListCS.length; i++){
        itemListCS[i].classList.replace('itemLCS-A', 'itemLCS-I');
    }
    switch (type) {
        case "ball":
            itemListCS[position].classList.replace('itemLCS-I', 'itemLCS-A');
            SetColorBallsSlider(position);
        break;
        ;
        case "automatic":
            if(position >= itemListCS.length){
                position = 0;
            }
            itemListCS[position].classList.replace('itemLCS-I', 'itemLCS-A');
            SetColorBallsSlider(position);
        break;
        ;
        case "left":
            const lastImage = contArrowSlider[0].dataset.lastImage;
            itemListCS[lastImage].classList.replace('itemLCS-I', 'itemLCS-A');
            SetColorBallsSlider(lastImage);
        break;
        ;
        case "right":
            const nextImage = contArrowSlider[1].dataset.nextImage;
            itemListCS[nextImage].classList.replace('itemLCS-I', 'itemLCS-A');
            SetColorBallsSlider(nextImage);
        break;
        ;
    }
    SetDataPreviewImage();
    SetInfoProgressSlider();
}
function SetInfoProgressSlider(){
    const textNumPS = document.querySelector('.textNumPS');
    const currentPositionImage = parseInt(document.querySelector('.buttonShowContentS').dataset.currentPositionImage) + 1;

    textNumPS.textContent = `${currentPositionImage} / ${itemListCS.length}`;
}
function SetInitialBallsSlider(){
    for(let i = 0; i < itemListCS.length; i++){
        contBallsPS.innerHTML += `
            <div class="ballPS ballPS-I" data-item-position="${i}"></div>
        `;
    }
    document.querySelectorAll('.ballPS')[0].classList.replace('ballPS-I', 'ballPS-A');
}
function SetColorBallsSlider(index){
    const ballPS = document.querySelectorAll('.ballPS');
    for(let i = 0; i < itemListCS.length; i++){
        ballPS[i].classList.replace('ballPS-A', 'ballPS-I');
    }
    ballPS[index].classList.replace('ballPS-I', 'ballPS-A');
}

function ShowPreviewImage(){
    if(previewImageSlider.classList.contains('previewIS-I')){
        previewImageSlider.classList.replace('previewIS-I', 'previewIS-A');
    }else if(previewImageSlider.classList.contains('previewIS-A')){
        previewImageSlider.classList.replace('previewIS-A', 'previewIS-I');
        return;
    }

    const siteName = document.querySelector('body').id;
    let pathImage = undefined;

    switch (siteName) {
        case "inicio":
            pathImage = "img/imgSliderHero/activas/";
            break;
        case "becas":
            pathImage = "../../img/imgSliderHero/activas/"
            break;
    }

    const currentPosition = parseInt(buttonShowContentS.dataset.currentPositionImage);
    const imageURL = `${pathImage}${arrInfoItemsSlider[currentPosition][0]}`;

    previewImageSlider.style = `background: url("${imageURL}"); background-position: center; background-repeat: no-repeat; background-size: contain;  background-color: rgba(0, 0, 0, .5);`;
}
function AutomaticMoveSlider(){
    let currentPosition = parseInt(buttonShowContentS.dataset.currentPositionImage) + 1;
    if(currentPosition >= itemListCS.length){
        currentPosition = 0;
    }
    SetActivityItemSlider("automatic", currentPosition);
    SetDataArrows(null, null, "automatic", null, currentPosition);
}
function StopAutomaticMoveSlider(){
    clearInterval(intervalSlider);
}
function SelectionTouchSlider(numberMove){
    let selection = undefined;
    if(numberMove < -75){
        selection = "left";
    }else if(numberMove > 75){
        selection = "right";
    }

    switch (selection) {
        case "left":
            SetActivityItemSlider("left");
            ChangePositionItemSlider("left");
        break;
        case "right":
            SetActivityItemSlider("right");
            ChangePositionItemSlider("right");
        break;
    }
}
function SetImagesSliderLazyLoading(){
    const siteName = document.querySelector('body').id;
    let pathImage = undefined;

    switch (siteName) {
        case "inicio":
            pathImage = "img/imgSliderHero/activas/";
            break;
        case "becas":
            pathImage = "../../img/imgSliderHero/activas/";
            break;
        ;
    }

    for(let i = 0; i < arrInfoItemsSlider.length; i++){
        if(itemListCS[i].dataset.itemSituation === "not-charged"){
            itemListCS[i].dataset.itemSituation = "charge";
            itemListCS[i].classList.add('itemListCS-charged');
            imagesItemListSlider[i].src = `${pathImage}${arrInfoItemsSlider[i][0]}`;
        }
    }
}

function MoveItemSliderKeyBoard(key){
    switch(key){
        case "ArrowLeft":
            SetActivityItemSlider('left');
            ChangePositionItemSlider('left');
            break;
        ;

        case "ArrowRight":
            SetActivityItemSlider('right');
            ChangePositionItemSlider('right');
            break;
        ;
    }
}

try {
    if(document.querySelector('.itemNewsM') === null){
        document.querySelector('.titleNoItems').style.display = "block";
    }
} catch (error) {}

imagesItemListSlider.forEach((image, index) => {
    image.addEventListener('load', () => {
        itemListCS[index].classList.add('.itemListCS-charged');
    })
})

window.addEventListener('keydown', event => {
    const key = event.key;
    MoveItemSliderKeyBoard(key);
    if(key === "ArrowLeft" || key === "ArrowRight"){
        StopAutomaticMoveSlider();
    }
})

window.addEventListener('keyup', event => {
    const key = event.key;
    if(key === "ArrowLeft" || key === "ArrowRight"){
        intervalSlider = setInterval(AutomaticMoveSlider, 8000);
    }
})

window.addEventListener('load', () => {
    SetImagesSliderLazyLoading();
})

document.addEventListener("DOMContentLoaded", () => {
    ChangePositionItemSlider('firstItem');
    SetDataArrows(null, null, "initial");
    SetInitialBallsSlider();
    SetDataPreviewImage();
    SetInfoProgressSlider();
    intervalSlider = setInterval(AutomaticMoveSlider, 8000);
});
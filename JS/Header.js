const headerC3 = document.querySelector('.sectC3H');
const menusC3H = document.querySelector('.menusC3H');
const sectPresentation = document.querySelector('.sectPresentation');
const sectEduPub = document.querySelector('.sectEduPub');
const sectLocation = document.querySelector('.sectLocation');
const sectGobF = document.querySelector('.sectGobF');
const sectMenuC3H_RES = document.querySelector('.sectMenuC3H-RES');
const main = document.querySelector('main');

window.addEventListener('scroll', () => {ScrollWindow()});

function ScrollWindow(){
    if(main.getBoundingClientRect().top >= 47){
        FixedHeaderC3();
        FixedMenusC3();
        MarginSlider();
    } else if(main.getBoundingClientRect().top < 47){
        FixedHeaderC3(true);
        FixedMenusC3(true);
        MarginSlider(true);
    }

    try {
        if(sectPresentation.getBoundingClientRect().top  <= 49){ 
            SetColorHeader('blue');
        } else if(sectPresentation.getBoundingClientRect().top > 49){
            SetColorHeader('cherry');
        }
    } catch (error) {}

    // console.log(sectLocation.getBoundingClientRect().top);
    if(sectLocation.getBoundingClientRect().top < 47){
        SetColorHeader('cherry');
    }

    if(sectEduPub.getBoundingClientRect().top < 44){
        SetColorHeader('gray');
    }
}

function SetColorHeader(color){
    if(color === 'blue'){
        for(let i = 0; i < sectMenuIndividual.length; i++){
            sectMenuIndividual[i].style = `background-color: #0151aa`;
        }
        headerC3.style = `background-color: #0151aa`;
        sectMenuC3H_RES.style = `background-color: #0151aa`;
        return;
    } else if(color === 'cherry'){
        for(let i = 0; i < sectMenuIndividual.length; i++){
            sectMenuIndividual[i].style = ``;
        }
        headerC3.style = ``;
        sectMenuC3H_RES.style = ``;
    } else if(color === 'gray'){
        for(let i = 0; i < sectMenuIndividual.length; i++){
            sectMenuIndividual[i].style = `background-color:  #333333`;
        }
        headerC3.style = `background-color:  #333333`;
        sectMenuC3H_RES.style = `background-color: #333333`;
    } else if(color === 'green'){
        for(let i = 0; i < sectMenuIndividual.length; i++){
            sectMenuIndividual[i].style = `background-color: #13322B`;
        }
        headerC3.style = `background-color: #13322B`;
        sectMenuC3H_RES.style = `background-color: #13322B`;
    }
}

function FixedHeaderC3(boolean){
    if(boolean === true){
        headerC3.classList.add('sC3H-Fixed');
        return;
    }
    headerC3.classList.remove('sC3H-Fixed');
}

function FixedMenusC3(boolean){
    if(boolean === true){
        menusC3H.classList.add('mC3H-Fixed');
        return;
    }
    menusC3H.classList.remove('mC3H-Fixed');
}

function MarginSlider(boolean){
    if(boolean === true){
        main.style = `margin-top: 3rem;`
        return;
    }
    main.style = ``;
}

document.addEventListener('DOMContentLoaded', () => {ScrollWindow();});
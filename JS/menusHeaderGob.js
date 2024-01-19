const mainGobH = document.querySelector('.mainGobH');
const eduGobH = document.querySelector('.eduGobH');
const contLinksGH = document.querySelector('.contLinksGH');
const contLinksEH = document.querySelector('.contLinksEH');
const body = document.querySelector('body');

function menusGob(event){
    const target = event.target;
    if(target.classList.contains('imgMenuBarLGH')){
        if(contLinksGH.classList.contains('contLGH-RES-I')){
            contLinksGH.classList.remove('contLGH-RES-I');
            contLinksGH.classList.add('contLGH-RES-A');
            return;
        }
        contLinksGH.classList.remove('contLGH-RES-A');
        contLinksGH.classList.add('contLGH-RES-I');
        return;
    }
    contLinksGH.classList.remove('contLGH-RES-A');
    contLinksGH.classList.add('contLGH-RES-I');
}

function menusSEP(event){
    const target = event.target;
    if(target.classList.contains('imgMenuBarSGH')){
        if(contLinksEH.classList.contains('contLEH-RES-I')){
            contLinksEH.classList.remove('contLEH-RES-I');
            contLinksEH.classList.add('contLEH-RES-A');
            return;
        }
        contLinksEH.classList.remove('contLEH-RES-A');
        contLinksEH.classList.add('contLEH-RES-I');
        return;
    }
    contLinksEH.classList.remove('contLEH-RES-A');
    contLinksEH.classList.add('contLEH-RES-I');
}


body.addEventListener('click', (event) => {
    menusGob(event);
    menusSEP(event);
});
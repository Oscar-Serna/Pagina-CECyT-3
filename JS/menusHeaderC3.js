const itemListC3Header = document.querySelectorAll('.itemListC3H');
const sectMenuIndividual = document.querySelectorAll('.sectMenuIndividual');

function ChooseMenuVisibility(boolean, type){
  switch(type){
    case "conocenos":
      if(boolean){
        AnimationMenus(boolean, 0);
      }
      break;
    case "estudiantes":
      if(boolean){
        AnimationMenus(boolean, 1);
      }
      break;
    case "docentes":
      if(boolean){
        AnimationMenus(boolean, 2);
      }
      break;
    case "investigacion":
      if(boolean){
        AnimationMenus(boolean, 3);
      }
      break;
    case "servicios":
      if(boolean){
        AnimationMenus(boolean, 4);
      }
      break;
  }
}

function AnimationMenus(boolean, number){
    if(boolean){
        sectMenuIndividual[number].classList.replace('sectMI-I', 'sectMI-A');
        return;
    }
    sectMenuIndividual[number].classList.replace('sectMI-A', 'sectMI-I');
}

itemListC3Header.forEach((item) => {
  const nameItem = item.id;
  item.addEventListener('mouseenter', () => {
    ChooseMenuVisibility(true, nameItem);
  })
  item.addEventListener('mouseleave', () => {
    ChooseMenuVisibility(false, nameItem);
  })
});

sectMenuIndividual.forEach(menu => {
  const nameMenu = menu.id;
  menu.addEventListener('mouseenter', () => {
    ChooseMenuVisibility(true, nameMenu);
  })
  menu.addEventListener('mouseleave', () => {
    ChooseMenuVisibility(true, nameMenu);
  })
});


// MENUS RESPONSIVE
const imgMenuBarC3H = document.querySelector('.imgMenuBarC3H');
const sectMenuC3RES = document.querySelector('.sectMenuC3H-RES');
const itemSubMenuC3H_RES = document.querySelectorAll('.itemSubMenuC3H-RES');
const itemMenuC3H_RES = document.querySelectorAll('.itemMenuC3H-RES');

document.querySelector('body').addEventListener('click', (event) => {testMenuHC3H_RES(event)})

function testMenuHC3H_RES(event){
    menuC3H_RES(event);
}

function menuC3H_RES(event){
    const target = event.target;
    if(target.classList.contains('imgMenuBarC3H')){
        if(sectMenuC3RES.classList.contains('sectMenuC3H-RES-I')){
            sectMenuC3RES.classList.replace('sectMenuC3H-RES-I', 'sectMenuC3H-RES-A');
            return;
        }
        sectMenuC3RES.classList.replace('sectMenuC3H-RES-A', 'sectMenuC3H-RES-I');
        return;
    }
    if(!(target.classList.contains('mC3H'))) sectMenuC3RES.classList.replace('sectMenuC3H-RES-A', 'sectMenuC3H-RES-I');
}

function SetSubMenusH3(number){
    if(itemSubMenuC3H_RES[number].classList.contains('itemSMC3H-RES-I')){
        itemSubMenuC3H_RES[number].classList.replace('itemSMC3H-RES-I', 'itemSMC3H-RES-A');
        return;
    }
    itemSubMenuC3H_RES[number].classList.replace('itemSMC3H-RES-A', 'itemSMC3H-RES-I');
}


itemMenuC3H_RES[1].addEventListener('click', () => {SetSubMenusH3(0);})
itemMenuC3H_RES[2].addEventListener('click', () => {SetSubMenusH3(1);})
itemMenuC3H_RES[3].addEventListener('click', () => {SetSubMenusH3(2);})
itemMenuC3H_RES[5].addEventListener('click', () => {SetSubMenusH3(3);})
itemMenuC3H_RES[6].addEventListener('click', () => {SetSubMenusH3(4);})

/* PENDIENTE TERMINAR EL FOREACH Y PONER EL ID EN LOS ELEMNTOS DEL DOM REQUERIDOS */
itemMenuC3H_RES.forEach((item, index) => {
  item.addEventListener('click', () => {
    
  })
})


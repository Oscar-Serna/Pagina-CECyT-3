const imgShowTemplate = document.querySelector('.imgShowTemplate');
const imgTemplate = document.querySelectorAll('.imgTemplate-in');
const btnShowImageTemplate = document.querySelectorAll('.btnShowImageTemplate');
const sectionShowImageTemplate = document.querySelector('.sectionShowImageTemplate')

function setIdButtons(){
    try {
        for(let i = 0; i < imgTemplate.length; i++){
            btnShowImageTemplate[i].id = i;
        }
    } catch (err) {
        alert(`Error encontrado : setIdButtons() \n${err} \nFuente: btnShowImage.js`);
    }
}

function readUrl(id){
    const url = imgTemplate[id].src;
    return url;
}

function setUrlImage(target){
    const url = readUrl(target.id);
    imgShowTemplate.src = url;
}

function showImageTemplate(){
    if(sectionShowImageTemplate.classList.contains('sSIT-I')){
        sectionShowImageTemplate.classList.replace('sSIT-I', 'sSIT-A');
        return;
    }
    sectionShowImageTemplate.classList.replace('sSIT-A', 'sSIT-I');
}

main.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('btnShowImageTemplate')){
        showImageTemplate();
        setUrlImage(target);
        // disableScroll();
    }
})

sectionShowImageTemplate.addEventListener('click', () => {
    if(sectionShowImageTemplate.classList.contains('sSIT-A')){
        showImageTemplate();
        enableScroll();
    }
})

setIdButtons();
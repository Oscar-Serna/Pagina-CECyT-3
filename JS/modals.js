const itemActionModal = document.querySelectorAll('.itemActionModal');
const sectionModal = document.querySelectorAll('.sectionModal');

itemActionModal.forEach((item) => {
    item.addEventListener('click', () =>{
        const nameItemModal = item.dataset.itemModal;

        ShowModalGestion(nameItemModal);
    })
});

function ShowModalGestion(identifier){
    for(let i = 0; i < sectionModal.length; i++){
        const identifierModal = sectionModal[i].dataset.identifierModal;
        if(identifierModal === identifier){
            AnimationModal(i);
        }
    }
}

function AnimationModal(index){
    if(sectionModal[index].classList.contains('sectIL-I')){
        sectionModal[index].classList.replace('sectIL-I', 'sectIL-A');
        return;
    }
    sectionModal[index].classList.replace('sectIL-A', 'sectIL-I');
}

sectionModal.forEach((item, index) => {
    item.addEventListener('click', e => {
        if(e.target.classList.contains('sectionModal')){
            AnimationModal(index);
        }
    })
})
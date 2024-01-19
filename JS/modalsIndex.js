// const sectNewsMain = document.querySelector('.sectNewsMain')
// const itemListEL = document.querySelector('.itemListEL-est');
// const modalWindow = document.querySelectorAll('.modalWindow');

// sectNewsMain.addEventListener('click', (event) => {
//     const target = event.target;
//     if(target.id === 'itemHorarios' || target.parentNode.id === 'itemHorarios'){
//         ModalWindow(0);
//         return;
//     }
// })

// itemListEL.addEventListener('click', (event) => {
//     if(event.target.classList.contains('itemListEL-est') || event.target.parentNode.classList.contains('itemListEL-est')){
//         ModalWindow(1);
//     }
// })

// document.querySelector('.modal-reinscr').addEventListener('click', (event) => {
//         ModalWindow(2);
// })

// modalWindow[0].addEventListener('click', (e) => {
//     if(e.target.classList.contains('modalWindow')){
//         ModalWindow(0)
//     }
// });
// modalWindow[1].addEventListener('click', (e) => {
//     if(e.target.classList.contains('modalWindow')){
//         ModalWindow(1)
//     }
// });
// modalWindow[2].addEventListener('click', (e) => {
//     if(e.target.classList.contains('modalWindow')){
//         ModalWindow(2)
//     }
// });

// function ModalWindow(index){
//     if(modalWindow[index].classList.contains('modalWindow-I')){
//         modalWindow[index].classList.replace('modalWindow-I', 'modalWindow-A');
//         return;
//     }
//     modalWindow[index].classList.replace('modalWindow-A', 'modalWindow-I');
// }
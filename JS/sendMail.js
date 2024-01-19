// // FUNCIONALIDAD

// // ANIMACIONba
// const contImgSectionBot = document.querySelector('.contImgSectionBot');
// const sectionBot = document.querySelector('.sectionBot');
// const contImgCloseBot = document.querySelector('.contImgCloseBot');

// contImgSectionBot.addEventListener('click', e => {
//     const target = e.target;
//     if(target.classList.contains('contImgSectionBot') || target.parentNode.classList.contains('contImgSectionBot') || target.parentNode.parentNode.classList.contains('contImgSectionBot')){
//         AnimationSectionBot();
//     }
// })

// contImgCloseBot.addEventListener('click', e => {
//     const target = e.target;
//     if(target.classList.contains('contImgCloseBot') || target.parentNode.classList.contains('contImgCloseBot')){
//         AnimationSectionBot();
//     }
// })

// function AnimationSectionBot(){
//     if(sectionBot.classList.contains('cISB-I')){
//         sectionBot.classList.replace('cISB-I', 'cISB-A');
//         return;
//     }
//     sectionBot.classList.replace('cISB-A', 'cISB-I');
// }
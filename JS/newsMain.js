const navNewsMain = document.querySelector('.navNewsMain');
const listNewsM = document.querySelector('.listNewsM');

if(!(listNewsM.clientWidth > navNewsMain.clientWidth)){
    navNewsMain.style = 'justify-content: center;';
} else{
    navNewsMain.style = '';
}
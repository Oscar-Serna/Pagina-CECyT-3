let textUsername = document.querySelector('.textUsername')
let textDay = document.querySelector('.textDay');
let textHour = document.querySelector('.textHour');

const emailData = JSON.parse(localStorage.getItem('emailData'));
const username = emailData.username;
const day = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

textUsername.textContent = username;
textDay.textContent = day;
textHour.textContent = hour;

setTimeout(() => {
    window.location.href = `../index.html`;
}, 6000);
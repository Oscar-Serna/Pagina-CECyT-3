const arrDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const arrMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];

setInterval(() => {
    const date = new Date();
    let month = arrMonths[date.getMonth()];
    let dayNumber = date.getDate().toString();
    let dayName = arrDays[date.getDay()];
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let daySit = undefined;

    if(hours < 12 || hours >= 24){
        daySit = 'a.m.';
    }else{daySit = 'p.m.';}

    hours = (convertHours(date.getHours())).toString();

    if(hours.length === 1){
        hours = '0' + hours;
    }
    if(minutes.length === 1){
        minutes = '0' + minutes;
    }
    if(seconds.length === 1){
        seconds = '0' + seconds;
    }

    if(dayNumber.length === 1){
        dayNumber = `0${dayNumber}`
    }


    let timeNow = `${dayName} ${dayNumber} de ${month} de ${year}`;
    let clock = `${hours}:${minutes}:${seconds} ${daySit}`;

    document.querySelectorAll('.titleLogoC3-RES')[0].textContent = timeNow;
    document.querySelectorAll('.titleLogoC3-RES')[1].textContent = clock;

}, 1000);


function convertHours(hour){
    switch (hour) {
        case 0: return 12;
        case 13: return 1;
        case 14: return 2;
        case 15: return 3;
        case 16: return 4;
        case 17: return 5;
        case 18: return 6;
        case 19: return 7;
        case 20: return 8;
        case 21: return 9;
        case 22: return 10;
        case 23: return 11;
        case 24: return 12;
    }
    return hour;
}
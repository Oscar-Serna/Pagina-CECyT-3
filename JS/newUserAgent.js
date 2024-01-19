/*{
    const askUserHour = document.querySelector('.askUserHour');
    const btnUserHour = document.querySelectorAll('.btnUserHour');
    const titleUserHour = document.querySelector('.titleUserHour');
    const subtitleUserHour = document.querySelector('.subtitleUserHour');
    const subtitleSummerUserHour = document.querySelector('.subtitleSummerUserHour');
    const textUserHour = document.querySelector('.textUserHour');
    const textUserSummerHour = document.querySelector('.textUserSummerHour');

    let btnUserHourNo = undefined;

    function newUser(){
        const date = new Date();

        if(localStorage.getItem('userData') === null){
            const userData = [date.getTime(), date.getUTCHours(), null];
            localStorage.setItem('userData', JSON.stringify(userData));
            viewHourUserAd();
        }else{
            const userData = JSON.parse(localStorage.getItem('userData'));
            if(userData[2] === null){
                viewHourUserAd();
            }
        }

    }

    newUser();

    function viewHourUserAd(){
        addEventListener('load', () => {
            setTimeout(() => {
                AskUserHour(true);
            }, 750);
        })
        setInterval(() => {
            let clock = getClock();
            document.querySelector('.textUserHour').textContent = clock;
        }, 1000);
    }

    function AskUserHour(boolean){
        let userData = JSON.parse(localStorage.getItem('userData'));
        if(boolean === true){
            askUserHour.classList.replace('askUH-I', 'askUH-A');
            disableScroll();
            return;
        }

        if(btnUserHourNo === 1){
            userData.splice(2, 1, 'summer');
            localStorage.setItem('userData', JSON.stringify(userData));
        }
        askUserHour.classList.replace('askUH-A', 'askUH-I');
        enableScroll();
    }

    function AskSummerHour(){
        titleUserHour.classList.replace('titleUH-A', 'titleUH-I');
        subtitleUserHour.classList.replace('subTUH-A', 'subTUH-I');
        textUserHour.classList.replace('textUH-A', 'textUH-I');
        subtitleSummerUserHour.classList.replace('subTSUH-I', 'subTSUH-A');
        textUserSummerHour.classList.replace('textUSM-I', 'textUSM-A');

        textUserSummerHour.textContent = getClock('summer');
        setInterval(() => {
            textUserSummerHour.textContent = getClock('summer');
        }, 1000);
    }

    btnUserHour[1].addEventListener('click', () => {
        if(textUserSummerHour.classList.contains('textUSM-A')){
            AskUserHour(false);
        }
        btnUserHourNo = 1;
        AskSummerHour();
    })

    btnUserHour[0].addEventListener('click', () => {
        AskUserHour(false);
        if(btnUserHourNo != 1){
            let userData = JSON.parse(localStorage.getItem('userData'));
            userData.splice(2, 1, 'normal');
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    })
}*/

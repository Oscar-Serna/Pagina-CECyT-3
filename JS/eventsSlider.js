const navEventsSlider = document.querySelector('.navEventsSlider');
const contArrowES = document.querySelectorAll('.contArrowES');
const itemListES = document.querySelectorAll('.itemListES');
let scrollValue = navEventsSlider.scrollWidth - navEventsSlider.clientWidth;
let numSum = 125;
let valueClientScroll = 0;


function arrowEvent(boolean){
    if(boolean === true){
        valueClientScroll += numSum;
        if(valueClientScroll > scrollValue){valueClientScroll = scrollValue;}
        navEventsSlider.scroll(valueClientScroll, 0);
        return;
    }
    valueClientScroll -= numSum;
    if(valueClientScroll < 0){valueClientScroll = 0;}
    navEventsSlider.scroll(valueClientScroll, 0);
}


contArrowES[0].addEventListener('click', () => {
    arrowEvent();
})

contArrowES[1].addEventListener('click', () => {
    arrowEvent(true);
})

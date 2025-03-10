let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', () => {

    interval = setInterval(startTimer, 10);
})



const startTimer = () => {
    tens++;
    if(tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9) {
        getTens.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        tens = '00';
        getTens.innerHTML = '00'
        getSeconds.innerHTML = seconds;
    }
    if(seconds < 10) {
        getSeconds.innerHTML = '0' + seconds;
    }
    if(seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59) {
        getSeconds.innerHTML = '00';
        seconds = '00'
        mins++;
        getMins.innerHTML = mins;
    }

}
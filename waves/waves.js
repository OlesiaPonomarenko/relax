const timer = 1;
let amountTime = timer * 60;

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
        countdown.textContent = 'Finish';
        setTimeout(() => {
       window.location.href = '/index.html';
;
}, 5000);
    }
}

function stopTimer() {
    clearInterval(timerId);
}

const audio = document.querySelector('#player');

document.addEventListener('click', () => {
    audio.play();
});

let timerId = setInterval(calculateTime, 1000);
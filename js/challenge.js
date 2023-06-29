const display = document.getElementById('counter');
let counter = 0;

function timer() { 
    counter++;
    display.textContent = counter;
}

setInterval(timer, 1000);

const incrementBtn = document.getElementById('plus');
const decrementBtn = document.getElementById('minus');

incrementBtn.addEventListener('click', () => {
    counter++;
    display.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    display.textContent = counter;
});

const pauseBtn = document.getElementById('pause');

pauseBtn.addEventListener('click', () => {
    pauseBtn.textContent = 'pause';
});

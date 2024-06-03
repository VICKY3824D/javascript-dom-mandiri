const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const btnReset = document.querySelector('#reset');
const SelectWinPoint = document.querySelector('#masukan');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let maxPoint = 30;
let isMax = false;

let P1Score = 0;
p1Button.addEventListener('click', () => {
    if (!isMax) {
        P1Score += 1; 
        if (P1Score === maxPoint) {
            isMax = true;
        }
        p1Display.textContent = P1Score; 
    } 
});

let P2Score = 0;
p2Button.addEventListener('click',() => {
    if (!isMax) {
        P2Score += 1;
        if (P2Score === maxPoint) {
            isMax = true;
        }
        p2Display.textContent = P2Score; 
    }
    
});

btnReset.addEventListener('click', () => {
    isMax = false;
    P1Score = 0;
    P2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});

SelectWinPoint.addEventListener('change', () => {
    maxPoint = parseInt(this.value);
    reset();
});


const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const reset = document.querySelector("#reset");

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let maxPoint = 10;
let isMax = false;

let P1Score = 0;
p1Button.addEventListener('click', function () {
    if (!isMax) {
        P1Score += 1; 
        if (P1Score === maxPoint) {
            isMax = true;
        }
        p1Display.textContent = P1Score; 
    } 
});

let P2Score = 0;
p2Button.addEventListener('click', function () {
    if (!isMax) {
        P2Score += 1;
        if (P2Score === maxPoint) {
            isMax = true;
        }
        p2Display.textContent = P2Score; 
    }
    
});

reset.addEventListener('click',() => {
    
});


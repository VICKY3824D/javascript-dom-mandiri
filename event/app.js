const button = document.querySelector('h1');

// action when clicked
button.onclick = function () {
    console.log("Anda telah mengeklik tombol");
}

const scream = () => {
    console.log("jangan sentuh saya");
}

// action when on mouse over the button
button.onmouseover = scream;

const evenbtn = document.querySelector("#evenbtn");
// evenbtn.addEventListener('click', () => {
//     alert("anda telah mengeklik evenbtn");
// });

function step1() {
    console.log("Step Pertama");
}

function step2() {
    console.log("Step Kedua");
}

function step3() {
    console.log("Step Ketiga");
}

// evenbtn.onclick = step1;
// evenbtn.onclick = step2;
// evenbtn.onclick = step3;

evenbtn.addEventListener('click', step1);
evenbtn.addEventListener('click', step2);
evenbtn.addEventListener('click', step3);
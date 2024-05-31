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
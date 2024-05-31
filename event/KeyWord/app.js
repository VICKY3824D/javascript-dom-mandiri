// meletakkan warna random 
const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// fungsi untuk mewarnai elemen yang akan dituju (menggunakan this)
function colorize() {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
    this.style.borderColor = generateRandomColor();
}

const tombolAll = document.querySelectorAll('button');

// mewarnai elemen button
for (let button of tombolAll) {
    button.addEventListener('click', colorize);
}

const h1 = document.querySelectorAll('h1');

//mewarnai elemen h1
for (let heading of h1) {
    heading.addEventListener('click', colorize);
}


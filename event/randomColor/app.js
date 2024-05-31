const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// meletakkan warna random 
function generateRandomColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// menggenerate warna random ketika button di klik
button.addEventListener('click', () => {
    const newGenerator = generateRandomColor();
    document.body.style.backgroundColor = newGenerator;
    h1.innerText = newGenerator;
    console.log(newGenerator);
});



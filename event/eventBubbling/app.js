const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// meletakkan warna random 
function generateRandomColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

button.addEventListener('click', function(e){
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation();
});

container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

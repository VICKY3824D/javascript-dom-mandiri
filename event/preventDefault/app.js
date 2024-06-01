const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector("#notes");

// input.addEventListener('change',(e) => {
//     console.log("berhasi diubah");
// });

// input.addEventListener('input', (e) => {
//     console.log("Berhasil menginput");
// });

// menambah list menggunakan input  keyboard
form.addEventListener('submit', function (execute) {
    execute.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = input.value.toUpperCase();
});


// menambah list menggunakan input  keyboard
form.addEventListener('submit', function (execute) {
    execute.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = input.value;

    list.append(newLi);
    input.value = '';

});

//menghapus list satu per satu dari atas (stack)
const del = document.querySelector("#del");
del.addEventListener('click', () => {
    const currentLi1 = document.querySelector('li');
    currentLi1.remove();
});

//menghapus semua list (ada bug)
// const dela = document.querySelector("#dela");
// dela.addEventListener('click', () => {
//     const currentLi2 = document.querySelectorAll('ul');
//     currentLi2.remove();
// });


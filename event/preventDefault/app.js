const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector("#notes");

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
//     const currentLi2 = document.querySelector('#notes');
//     currentLi2.remove();
// });

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
    execute.preventDefault(); // mencegah default action (masuk ke dalam /destination)
    const newLi = document.createElement('li');
    //menambahkan teks ke dalam element 'li' dengan input value  
    newLi.innerText = input.value.toUpperCase();

    // menerapkan element 'li'ke element 'ul'
    list.append(newLi);
    input.value = '';

});

//menghapus list dengan mengekliknya
list.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
});

//menghapus list dengan click
// const lia = document.querySelectorAll('li');
// for (let list of lia) {
//     list.addEventListener('click', function () {
//         list.remove();
//     })
// }

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


const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector("#notes");
const del = document.querySelector("#del");

// menambah list menggunakan input  keyboard
form.addEventListener('submit', function (execute) {
    execute.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = input.value;

    list.append(newLi);
    input.value = '';

});

//menghapus list 
del.addEventListener('click', () => {
    const currentLi = document.querySelector('li');
    currentLi.remove();
});

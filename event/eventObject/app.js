document.querySelector('button').addEventListener('click',  (e) => {
    console.log(e);
});

const inpt = document.querySelector('input');

inpt.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log('Panah Atas');
            break;
        case 'ArrowRight':
            console.log('Panah Kanan');
            break;
        case 'ArrowDown':
            console.log('Panah Bawah');
            break;
        case 'ArrowLeft':
            console.log('Panah Kiri');
            break;
        default:
            console.log("diabaikan");
            break;
    }
});

// inpt.addEventListener('keyup', () => {
//     console.log('Tombol dilepas');
// });
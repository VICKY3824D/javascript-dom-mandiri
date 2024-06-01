const form = document.querySelector('#form');

// form.addEventListener('submit', function (execute) {
//     execute.preventDefault();
//     console.log('Submitted form');
// });

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Harusnya ke google.com");
});
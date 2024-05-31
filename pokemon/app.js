// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 400; i += 4) {
    //container.append(`${i}, `);

    // menambahkan 100 elemen dengan class pokemon
    const div = document.createElement('div');
    div.classList.add('pokemon'); 
    
    // mengiterasi gambar pokemon
    const imgPokemon = document.createElement('img');
    imgPokemon.src = `${baseImgURL}${i}.png`;

    //menandai gambar ke-i
    const label = document.createElement('span');
    label.append(`#${i}`);

    div.appendChild(imgPokemon);
    div.appendChild(label);
    container.appendChild(div);
}
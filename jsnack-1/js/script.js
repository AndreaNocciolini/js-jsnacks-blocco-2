const containerFluid = document.querySelector(`.container-fluid`);
const container = document.querySelector(`.container`);

// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const names = [`Andrea`, `Giacomo`, `Lorenzo`, `Rondo`, `Renato`, `Terenzio`, `Filadelfio`, `Federico`, `Daniele`, `Fulvio`, `Luca`, `Sara`, `Sarah`, `Lucia`, `Elisabetta`, `Tommaso`, `Thomas`, `Jacopo`, `Emma`, `Emilio`, `Amedeo`, `Dante`];
const surnames = [`Rossi`, `Bianchi`, `Gialli`, `Bruschi`, `Delacroix`, `Calcare`, `Granada`, `Savoia`, `Talco`, `Panna`, `Rigoletti`, `Frosini`, `Nannini`, `Muletti`, `Pantalone`, `Marchigiani`, `Fo`, `Guantanamo`, `Primo`, `Ultimo`, `Mustafà`];
// let userName = names[Math.floor(Math.random() * names.length)];
// let userSurname = surnames[Math.floor(Math.random() * surnames.length)];

function guest(userName, userSurname) {
    userName = names[Math.floor(Math.random() * names.length)];
    userSurname = surnames[Math.floor(Math.random() * surnames.length)];
    return `${userName} ${userSurname}`;
}

const guestName = guest()
console.log(guestName)

container.innerHTML = `Your name is: ${guestName}`


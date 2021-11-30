const containerFluid = document.querySelector(`.container-fluid`);
const container = document.querySelector(`.container`);

// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const names = [`Andrea`, `Giacomo`, `Lorenzo`, `Rondo`, `Renato`, `Terenzio`, `Filadelfio`, `Federico`, `Daniele`, `Fulvio`, `Luca`, `Sara`, `Sarah`, `Lucia`, `Elisabetta`, `Tommaso`, `Thomas`, `Jacopo`, `Emma`, `Emilio`, `Amedeo`, `Dante`, `Davide`, `Jacob`, `Matteo`, `Fiorenzo`, `Romeo`, `Giulietta`, `Juliet`, `Laura`, `Francesca`, `Sonia`, `Mauro`, `Cesare`, `Alphons`, `Elizabeth`, `Lorenza`, `Simone`, `Niccolò`, `Frederick`, `Nicolas`, `Liliana`, `Greta`, `Giorgia`, `Rita`];
const surnames = [`Rossi`, `Bianchi`, `Gialli`, `Bruschi`, `Delacroix`, `Calcare`, `Granada`, `Savoia`, `Talco`, `Panna`, `Rigoletti`, `Frosini`, `Nannini`, `Muletti`, `Pantalone`, `Marchigiani`, `Fo`, `Guantanamo`, `Primo`, `Ultimo`, `Mustafà`, `Mazzola`, `Marchi`, `Lombardi`, `Gretelli`, `Ciucchi`, `Uber`, `Zero`, `Giando`, `Intini`, `Sonichetti`, `Zingari`, `Smith`, `Birilli`, `Giovini`, `Palladio`, `Tugurio`, `Giovanna`, `Rapidi`, `Fox`, `Polpi`, `de Santis`, `Bernadei`, `Scoppola`];
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


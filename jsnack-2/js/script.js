const containerFluid = document.querySelector(`.container-fluid`);
const container = document.querySelector(`.container`);

// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [];
let userNumber;
do {
   userNumber = parseInt(prompt("Please, choose a number between 1 and 75."));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 75); 

i = 0;
while (i <= userNumber) {
    let number = Math.floor(Math.random() * 101);
    numbers.push(number);
    i++;
}

const oddNumbers = numbers.filter(checkOdd);
function checkOdd(odd) {
    return odd % 2 !== 0;
}
console.log(`Original Array: ${numbers}`);
console.log(`Odd Array: ${oddNumbers}`);

let sum = 0;
for (let x = 0; x < oddNumbers.length; x++) {
    sum += oddNumbers[x];
}
console.log(`Odd Array Element's sum: ${sum}`);
container.innerHTML = `Your Lucky Number is: <span class="green">${sum}</span>. Nice!`


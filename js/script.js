// loads random numbers
const numbersBox = document.getElementById('number-box');
const rndNumbers = rnd5Numbers();

loadNum(numbersBox, rndNumbers);
console.log(rndNumbers);
startGame(rndNumbers);

// ***** functions *****

// generates 5 randon numbers between 1 and 100
function rnd5Numbers() {

    const numbers = [];

    while (numbers.length < 5) {

        const rndNum = Math.floor(Math.random() * 100) + 1;

        if (!numbers.includes(rndNum)) {
            numbers.push(rndNum);
        }

    }

    return numbers;

}


// load numbers
function loadNum(container, numArray) {

    container.innerHTML = '';

    numArray.forEach((num, i) => {
    
        if (i == numArray.length - 1) {
            container.innerHTML += num;
        } else {
            container.innerHTML += num + ', ';
        }
    
    });
    

}


// hide numbers and ask numbers to user
function startGame(computerNum) {

    // hide numbers
    numbersBox.classList.add('d-none');

    // ask numbers and add if correct
    const userCorrectNum = [];

    for (let i = 0; i < 5; i++) {

        const userNum = parseInt(prompt('Inserisci uno dei 5 numeri:'));

        if (computerNum.includes(userNum) && !userCorrectNum.includes(userNum)) {
            userCorrectNum.push(userNum);
        }

    }

    // load message
    const messageBox = document.getElementById('message');
    messageBox.innerHTML = `Hai indovinato ${userCorrectNum.length} numeri su 5`;

    // load correct numbers
    loadNum(numbersBox, userCorrectNum);
    numbersBox.classList.remove('d-none');

}
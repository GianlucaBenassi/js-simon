
console.log(rnd5Numbers());



// ***** functions *****

// generates 5 randon numbers between 1 and 100
function rnd5Numbers() {

    const numbers = [];

    while (numbers.length < 6) {

        const rndNum = Math.floor(Math.random() * 100) + 1;

        if (!numbers.includes(rndNum)) {
            numbers.push(rndNum);
        }

    }

    return numbers;

}
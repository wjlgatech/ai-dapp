var bets = []; // to store the bets

function addBet(bet) { // bet is an object with the following properties:{name,value}
    bets.push(bet);//add bet to array
}

let generateRandomNumber = () => { // generate random number between 1 and 1000; here => is a function expression and not a function declaration
    return Math.floor(Math.random() * 1000 + 1);}

let getWinner = () => { // get the winner
    let winNum = generateRandomNumber(); // generate random number as the winning number
    let closest = 1001; // initialize the closest number to 1001
    let currWinner = 0; // initialize the current winner to 0

    for (var i = 0; i < bets.length; i++) { // loop through the bets to find the closest number
        let diff = Math.abs(bets[i].value - winNum);
        if (diff < closest) {
            closest = diff;
            currWinner = i;
        }
    }

    return bet[currWinner]; // return the winner with the closest number
}

function clearBets() { // clear bets
    bets = [];
}

// hardcoded bets
addBet({name: "Bob", value: 333});  // add a bet
addBet({name: "Sue", value: 777});  // add another bet
addBet({name: "Paul", value: 999}); // add another bet
console.log(bets); // print bets
console.log("Winner is: " + getWinner()); // print winner
var bets = []; // to store the bets

function addBet(bet) {
    bets.push(bet);//add bet to array
}

let generateRandomNumber = () => { // generate random number between 1 and 1000
    return Math.floor(Math.random() * 1000 + 1);}

let getWinner = () => { // get the winner
    let winNum = generateRandomNumber();
    let closest = 1001;
    let currWinner = 0; // index into bets array

    for (var i = 0; i < bets.length; i++) {
        let diff = Math.abs(bets[i].value - winNum);
        if (diff < closest) {
            closest = diff;
            currWinner = i;
        }
    }

    return bet[currWinner];
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
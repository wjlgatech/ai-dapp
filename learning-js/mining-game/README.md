## JS part2
**References & Credits** https://courses.blockgeeks.com/lesson/javascript-part-2-3/

### [video 0-20 min] JS History and Concepts
ES: standard v.s. JS implementation of the standard
JS milestone:
    - 1997 Brandon invented JS at Netscape and submited to EMAS for standarization.
    - 2011 Ryan make it working for both frontend browser and backend server
    - interpreter ~ compiler in C (paintpoint: different machine require different compiler to convert high-level language e.g. C into machine code e.g. assembly) ~ VM of Java (no more need different compiler for programmer, programmer just need a VM, an intermediate layer that convert high-level language to intermediate language, and let the VM engineers workout how to convert the intermediate language to different machine digestable code)


### How to set a local server to host your webpage

**situation** Following the instructor, I ran into an error `zsh: command not found: lite-server`, given that I already downloaded the installer of node.js to my Macbook Pro and installed it successfully. 

I solved the issue with the helps from:

**references & credit**: https://www.freecodecamp.org/news/how-you-can-use-lite-server-for-a-simple-development-web-server-33ea527013c9/

Here is the **Solution**:

1. download node.js here:https://nodejs.org/en/download/

2. click open the package installer e.g. `node-v16.13.1.pkg` and follow the instructions to install node.js 

3. To create a project e.g. `mining-game`, go to your director by typing on terminal `cd my/project/path`. Then create your project folder `mkdir mining-game`.

4. to create the index file type on terminal `touch index.html`. Use your favored code editor e.g. vscode to type the following content:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Mining Game</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h2>Input a number between 1 and 1000</h2>
        <form id='bet'>
            <input placeholder='Your Name' name='better' type="placeholder" required><br>
            <input type='number' name='bet' min='1' max='1000' required><br>
            <button type='submit'></button>
        </form>
    </body>
</html>

```
5. Use `npm` to initialize an empty project. 
```bash
npm init -y
```
Here `-y` indicate using defaults for any parameters.

6. To installs the `lite-server` package and adds it to the **devDependencies** in your project’s `package.json` file. Type in terminal:

```bash
npm install lite-server --save-dev
```

7. To run lite-server, you need to modify your `package.json` file by adding `"scripts":{"start": "lite-server"},`. The resulted `package.json` will be something like this:

```json
{
  "name": "mining-game",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
  },
  "keywords": [],
  "author": "Paul JL Wu",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1"
  }
}
```

8. To run `lite-server` and serve your `index.html` web page, run
```bash
npm start
```

### How to  simplify your JS coding typing by using jQuery
- jQuery is a js library which greatly simplifies js coding. Plus it very easy to learn. https://www.w3schools.com/jquERy/default.asp. 

- to activate jQuery in index.html, add the follow line of code after </body>
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js" </script>
```

### How to code business logics into your webpage 
**index.html: Users interact with your webpage through the front end**
```html
    <body>
        <h2>Input a number between 1 and 1000</h2>
        <form id='bet'>
            <input placeholder='Your Name' name='better' type="placeholder" required><br>
            <input type='number' name='bet' min='1' max='1000' required><br>
            <button type='submit'>Submit</button>
        </form>
        <br>
        <button id='winner' type='submit'>Winner!</button>
    </body>
```

**game.js: your business logic is running on the back end**

- add `game.js` under the folder `mining-game`
- add the following line of code into `index.html` after </body>
```html
<script src='game.js'></script>
```

- construct `game.js` as follow:
```js
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
```


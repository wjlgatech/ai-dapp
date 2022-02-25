
## Ethereum developer Part1
source1: Ethereum developer 101 https://courses.blockgeeks.com/course/eth-101-ethereum-developer-course/

source2: Ethereum contract 101 https://courses.blockgeeks.com/course/bg101-ethereum-course-101/

- History of blockchain
- Blockchain architecture
- How to write code in Solidity
- Best practices
- How to deploy your Smart Contracts

>  my 1st blockchain project: create a smart contracts for fastdeep learning community so that each member are incentive to fulfill every goal to be happier, healthier, richer, wiser (10X)  within 52 iterations.


### History of bitcoin
Source: https://courses.blockgeeks.com/lesson/history-of-bitcoin-4/

Q: What is bitcoin?

A: bitcoin == db + currency
        - db: distributed, transparent
        - currency: block mining, proof of work, why valuable?,
    
    - to understand bitcoin, read the seminal paper: bitcoin.org/bitcoin.pdf
    
Q: what are the major painpoint bitcoin solve? what are the major contribution?
    
Q: what are the major limitation of Bitcoin? How to address them?
    
Q: What make Ethereum the biggest invention after bitcoin?
    
- the bitcoin blockchain enables the borderless currency
- a decentralized system like bitcoin, ethereum will continue to operate as long as there are members in the network.
- hash(your public key) = your bitcoin address
- in decentralized systems like bitcoin, ethereum, transaction must be signed by your private key
- the consensus protocol = the rule to creating new blocks
- one main bottleneck for bitcoin/ethereum is scaling, as consensus is hard to achieve.

### History of ethereum
source: https://courses.blockgeeks.com/lesson/history-of-ethereum-3/


### solidity setup: 
No set up needed, all is available on your web brower: remix.ethereum.org

Q: What does `Remix` do?

A: 
- Remix allows you to create a smart contract, edit it, compile it and deploy it, play with it. All happens in a browser (remix.ethereum.org) virtual, local environment.

- Remix, what language you use to write the contract is flexible: it could be JS, Solidity, etc. As long as they can be compiled down to Ethereum Virtual Machine (EVM) bytecode.
- Remix can generate test file for you (:
- But, Remix does NOT allow you to deploy your smart contract to the Ethereum mainnet.

- [/5] walk through a copy & anotate it
- [/5] create my 1st smart contract with Daniel, then Taylor, then Alex

## Solidity Intro

https://blockgeeks.com/guides/javascript-and-solidity/

https://blockgeeks.com/guides/introduction-javascript-solidity-2/

#### Feature1: browser built in JS engine 
JS engine is with your chrome browser. right click and select `inspect`, then choose the `console` tag:

type:
```js
>alert('hi Jesus')
>console.log('I am always with you')
>a = 2
>b = 3
>a**b
```
#### Feature2: 3-way to declare variable: var, let, const

```js
age = 47 //direct assign value to variable
var myAge = 40 //use var

if (myAge>12){
    let dogAge = 7*myAge; //let dogAge is scoped within {}
    console.log(`You are ${dogAge} dog ages old, b/c you are ${age} old`); // use `` not '' within console.log()
}
console.log(dogAge)//wrong! b/c dogAge is defined using let & valid only within {}
```

#### Feature3: dynamic typing of a variable
```js
age = 10
typeof(age)

age = 10.3
typeof(age)

age = '10'
typeof(age)

```

#### Feature4: OOP `A PIE`

- Abstraction: you only need to know how to use the API but not the inner working of a class. API usually remain the same and the inner working change update all the time.
- Polymorphisim (poly=many, morphism=form, 'many forms'): one function/operator can have multiple usages. e.g. `+` can be use in `1+2 == 3` and `first_name = 'Paul'; last_name = 'Wu'; first_name + last_name == 'PaulWu'
- Inheritance: child class inherit the attributes and methods of a parent class.
- Encapsulation: class packs both data and functions together as a functioning object.

#### Feature5: implicit & explicit delegation
**Delegation**  means an (child) object can be defined in terms of another (parent) object. therefore the child object can commit|delegate|assign responsibility to its parents class.


With **explicit delegation**, an object can explicitly delegate a message to any other object it has knowledge of. 

With **implicit delegation**, an object can explicitly designate another object as its “parent”. Messages that are not understood by the receiving object are automatically (implicitly) delegated to this parent.

#### Feature6: class ( factory function / constructor)
With JS, in order to create a Python-like class, you can either use factory function or constructor :

**factory function** example:
```js
//create the factory function which takes in one parameter `radius`

function createCircle(radius) {

//the function returns this value which is an object

return {

area: function() {

   let area = 3.14 * radius * radius;

   console.log(area);

}

};

}

//creating the object which gets its value from the factory function

let circle = createCircle(1);

circle.area();

//dynamically updating the object by using the same factory function

circle = createCircle(2);

circle.area();

```

**constructor** example:
```js
function Circle(radius) {//by convention, use Upper case for a constructor

   this.area = function(){ //'this' keyword is similar to 'self' in python, e.g. def __init__(self,...)

   let a = 3.14 * radius * radius;

   console.log(a);

}

}

let circle = new Circle(1); //when you init a new object using a constructor, use keyword 'new'

circle.area();

let circle1 = new Circle(2);

circle1.area();
```


**function** vs **object with attributes & method**

```js
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}

```

```js
//define employee object as a dictionary with key:value pairs 
let employee = { 
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    
    getWage: function(){ #Uncle Bob (Robert Martin): the best functions are those without parameters; all the parameters are being the attributes of the employee object.
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employer.getWage();
```


### Solidity Data Structure


### Require statement
Situation: you want only certain people and certain address to be able to modify the state of a Smart Contract (e.g. use the `increase` function of your counter). How do you impose such constrain?

Target: you can use `Require` statement

### Modifier
Situation: you want to use the require statement again and again by other functions, therefore you had better make the require statement a function that can be called by other functions.

```js
pragma solidity ^0.5.1;

contract Counter {
    uint256 public count;
    address public owner;

    modifier onlyOwner(){ //this modifier will modifer the function increament() below
        require(msg.sender == owner); //the require statement impose a constraint that only 
        _; //whichever function you put this modifier to, execute the require() first then the code of that function
    }

    constructor(uint256 _count) public{
        count = _count;
        owner = msg.sender
    }

    function increament() external onlyOwner { //now we call the function modifier `onlyOwer` to modifier increament()
        count++;
    }

    function decrement() external onlyOwner{ // again, we call modifier onlyOwner() to modify decrement()
        count--;
    }
}
```

### Enums
Q: what is Enums?

A: Enum stands for the enumerated options, e.g. a dropdown-manual that contains a list of options that you can choose for a variable. Enum is user-defined datatype that imposes constrains on a variable to have only a few predefined values. For instance, you can define a Enum `Gendre` to have 2 options {MALE, FEMALE}; this dropdown-manual can be used to restrict variable `sex` to have only 2 possible values {MALE, FEMALE}. Another example: you can define a Enum `Levels` to have 4 options {JUNIOR,SENIOR, PRINCIPLE, SENIOR PRINCIPLE}; this dropdown-manual can be use to restrict variable `job-level` to choose from those 4 possible values.

```js
//the content of Season.sol

pragma solidity ^0.5.11;

contract Fall {
    
    enum Season {FALL, WINTER} //use the keyword `enum` to define a 'dropdown-manual' Season that have 2 predefined values {FALL, WINTER}. This makes Season a user-defined datatype.
    Season public currentSeason; //we define a variable currentSeason which takes value from the user-defined 'dropdown-manual' Season

    bool public colorfulLeaves; //define another variable colorfulLeaves with *dtype* bool and *accesibility* public
    modifier inSeason(Season expectedSeason) { //define a modifier function which is a piece of code to the condition check for us
        require(currentSeason == expectedSeason); //check this condition require() before doing anything else!
        _;
    }
    // check: if the public variable currentSeason is FALL, then set the colorful leaves to true; otherwise, set colorful leaves to false
    function leavesChangeColor() external inSeason(Season.FALL) {
        colorfulLeaves = true;
    }

    //define a function fallToWintor that assign value WINTER to public variable currentSeason; we also want this function can be accessed by external user
    function fallToWinter() external {
        currentSeason = Season.WINTER;
        colorfulLeaves = false;
    }
    //define another function winterToFall (we skip spring, summer for the sake of simplicity) that assigns value Fall to the public variable currentSeason; we also want this function be publically accessible
    function winterToFall() external {
        currentSeason = Season.FALL;
        colorfulLeaves = true;
    }

}
```

### Payable events
source: https://courses.blockgeeks.com/lesson/payable-events/

Q: What is payable event?
A: a function with `msg.value > 0` means the caller of this function must pay any amount of Ether over 0.

Q: What is a fallback function in an Ethereum contract?
A: When somebody calls the contract but does not specify which function to use, the fallback function will be ran by default.


```js
pragma solidity ^0.5.11;

contract Count{
    uint public counter; //define a variable counter with *datatype* unsigned int and *accesibility* public
    event Transfer(address who, uint amount); // create an event Transfer() with 2 inputs: who (address) and amount (uint dtype)

    // use a constructor function to init the contract state
    constructor() public { 
        counter = 0;
    }
    //define payable function, which can receive funds
    function increment() payable external {
        //require funds to be greater than 0
        require(msg.value > 0);
        counter++;
    }

    function decrement() external {
        counter--;
        emit Transfer(msg.sender, address(this).balance);//fire off the event with the msg.sender and the balance of this contract
        msg.sender.transfer(address(this).balance); //transfer the fund of this contract (e.g. address(this).balance) to the person call this function (e.g. msg.sender)

    } 

    function () external { //when a function is un-named, it will be called whenever a transaction is sent here but without specifying a function
        counter++;
    }  

    function getBalance() view external returns (uint){
        return address(this).balance;
    }
}

```



### Deploy your smart contract

source: https://courses.blockgeeks.com/lesson/deploying-your-contract/

Q: What is MetaMask?

Source: 
- https://metamask.io/ 
- https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en&authuser=1

- MM is an Ethereum wallet in your chrome browser.
- MM is a Chrome extension that allows you to access Ethereum enabled distributed applications (DApps) in your Chrome browser.
- MM let you create your IDs (via private keys, local client wallet, and hardware wallets) and manage them. So that when a Dapp want to perform an transaction and write to the blockchain, you have a secure interface (`Mask`) to review this transaction before you approve it or reject it.

- Because MM add functionality to a normal browser, MM requires you give it permission to read and write to any webpage. You can always view the source of MM here: github.com/MetaMask/metamask-plugin

- MM enable you to access to 
    - web 3.0
    - Dapps
    - NFTs
    - erc20
    - tokens
    - ICOs
    - erc271
    - ...

Q: Why deploying my contract? 

Q: How to deploy my contract?

### Deploy your contract using a cryto wallet (e.g. MetaMask)

source:https://courses.blockgeeks.com/lesson/deploying-your-contract/

- **keep seedphrase to yourself, not any other** when you create a new wallet, make sure that you write down all the seed phrases and recovery information and keep them in a safe place. Never share your seed phrase with other people.

- **use your dev wallet for development, not your fund wallet** It's a good practice that when you launch contracts or any other development work, you use a different wallet than your primary/fund storing wallet.

- when you deploy your contract through a wallet (e.g. MetaMask), you need to change your Remix environment to `injected Web3`. i.e. MetaMask bring web3 components (e.g. Ethereum) to your rutine web browser.

- When you deploy a contract on a `block explorer` (e.g. Etherscan), the 'Input Data' field contains your `compiled-down bytecode`.

### Interactions & Inheritance
source: https://courses.blockgeeks.com/lesson/interactions-and-inheritance/

inheritance means a 2nd contract can obtain the functions and attributes of the 1st contract.

```js
pragma solidity ^0.5.11;

contract Counter {
    uint public count;

    function increment() external {
        require(msg.sender != tx.origin); //you can not call this function directly, but through another contract
        count++;
    }
}

//inherit functions from contract Counter
contract interact is Counter {
    //create a spaceholder to keep my instance
    Counter counterInstance;

    constructor(address _counter) public{
        // init my instance
        counterInstance = Counter(_counter);
    }

    function incrementCounter() external {
        //now you can call functions with our instance
        counterInstance.increment();
    }
}
```
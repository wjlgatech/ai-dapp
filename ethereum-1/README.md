
## Ethereum developer Part1
source: https://courses.blockgeeks.com/course/eth-101-ethereum-developer-course/

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

### Payable Events

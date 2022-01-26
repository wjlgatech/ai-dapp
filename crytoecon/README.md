### CrytoEconomics of Bitcoin
CE: the use of `incentives` + `crytography` to design systems, applications and network.

Q: What is money anyway?

A: `money facilitates trade`

Q: What are the properties of money?

- concencus: everyone has to agree to give it value (money does not necessary has inherent value)
- it has to be scarce (if there are too much amount of money, the agree value decrease, e.g. inflation)

Q: what make bitcoin unique money?

- transaction records are valid and unchangable
- no double-spending of coins (i.e. the same person create multiple  copy of the same digital coin and spend it with different vendors.)
- no middleman between transacting parties
- use incentives to encourage good behavior and discourage bad one.

Q: what are the benifit of bitcoin?

A. Has the convenience and speed of transferring money digitally w/out relying on third parties like a bank
B. Its value isn’t affected by banks or national economies
C. Provides a secure, transparent and immutable network
D. It’s very private because it’s anonymous

### Crytography
Reference & Credit: https://courses.blockgeeks.com/lesson/cryptography/

Q: What is crytpgraphy?
A: crtyto=secry graph=writing; crytography is the math to encode and decode message. It's the study to make info private and secure.

Example: Julius `Caesar's cipher` where each letter is shift forward by 3 letters; the `reverse cipher` where each letter is shift backward by 3 letters.

Example: Nazy Gemeny's `Enigma Machine` used a sophisticated letter substitution method.

$(plain-text)->[cipher-X]->(cipher-text)->[reverse cipher-X]->(plain-text)$

- `encryption`: $(plain-text)->[cipher-X]->(cipher-text)$ 
- `decryption`: $(cipher-text)->[reverse cipher-X]->(plain-text)$
- [cipher-X] and [reverse-cipher-X] are called `symmetric cryptography`. The same key is used for both encryption and decryption. Both Caesar's Cipher and the Enigma Machine used the same key

- In `asymmetric cryptography` 2 different keys are used in encryption and decryption, respectively. One private key and one public key. Public key is derided from private key, but it's  computationally infeasible to calculate private key from public key.

$(sender Joe:'I love u')->[public key of receiver Joy to encrypt]->[encrypted message]->[privat key of receiver Joy to decrypt]->receiver Joy: 'I love u'$

    - `public key`: the sender of a message will use the public key of the receiver to encrypt the message.
    
    - `private key`: only the receiver with their private key can decrypt the message

Q: What is the difference? encrypting with public key VS encrypting with private key

A: encrypting with private key is Not for security but for ownership: the owner of the private key can sign a piece of data by encrypting it with his private key (it's his `digital signiture`), then anyone with a public key can decrypt the message. In case that the decrypted message = the original document being signed, then it proves that the docu was signed by the owner.

i.e. In digital signiture, the sender signs a message with the private key and the receiver decrypts it with the public key that was derided by the private key.

In contrast, encrypting with public key is for the sake of security.


Q: What is the purpose of crytography in blockchain?
A: crytograph is used 
- to prove of digital access ownership 
- to maintain data integrity (prevent tampering of data)

Q: what is Cryptic hashing
- hash function: input -> output
e.g. modular function $17 mod 5 == 2, 7 mod 5 == 2$

- cryptgraphic hash function has extra properties to make it more secure
    - input of any size is mapped to output of fixed size, so that the size info can not be used to figure out the reverse mapping
    - the same input always produce the same output while a small change in input is mapped to a completely different output. e.g. it is a deterministic function; it is used to detect tampering with the input.
    - it is computationally infeasible (>= 2^80 steps) to figure out the input based on the output hash.
    - there is a very tiny chance that 2 different inputs is mapped to the same output (called `hash collision`)
    
**hash function** is a one-way function where an input is obfuscated VS **encryption algo** is a two-way function where there is encryption and decryption. Therefore encryption Algos can be used

- to share private message bw parties securely `security`
- to prove ownership of a digital entity `digital signiture`

Q: how does blockchain to prevent its content being altered to maintain **immuntability**?

A: $[block_i] signiture = hash ([block_i]+hash[block_(i-1)]))$. 

- [block_i] = {transaction_A, transaction_K, tranaction_F,...}

- if someone tamper the content of block_(i-1), then all the signitures of the downstream blocks will be changed.


### Consensus & Mining, Proof of Work (POW)
Reference & Credit: https://courses.blockgeeks.com/lesson/consensus-and-mining-2/

Q: What is consensus?
A: all the nodes in a decentralized network come to agree what the truth is.

    - centralized VS decentralized network:
        - centralized nw: all nodes rely on the central authority to decide what is truth. Centralized authority can directly modify data and achieve concensus. In case the central authority is dishonest and tamper data, the whole centralized network is deceived and act under the lie of the centralied authority. `authortarian gov's brainwash`. 
        
        - decentralized nw: there is no central authority; each node does not trust other nodes.
        
> The Byzantine General's Problem: A group of Byzantine generals are going to attach an enemy cattle. To be success they need to come up with a common battle plan, otherwise individual attack will result in failure. The problem is to find an algorithm that ensures the royal generals will reach an agreement on the battle plan, regardless what the traitor do. Similary,how can distributed computer network handle malfunctioning nodes that produce conflicting info to the rest nodes of a system?

Q: How do a decentralized network reach consensus?
A: Bitcoin use `proof-of-work` algo to ensure all honest nodes to reach concensus on the true history of transactions. 
- each node receive different small subset of the transactions.
- each node is connected to a small subset of other node, they can only interact with their intermediate neighbors, not others.
- those nodes are conpeting to packaging the transactions into new block, only the fastest new block will be added after validation of the sender's neighbors.  
- producing new block cause and sending new block out cause intense computational works while validating the correctness of the new block cause little to no work. Therefore, fabricating a false block is discouraged by this cost-effect mechanism.

To find $nonce$ such that

$$ current block hash number = hash_fn(
1. current-block's transaction. 
2. previous-block's hash number. 
3. nonce) < a difficult number $$

Here nonce is number the miner to to figure out so that the current block hash is less than a difficult number provided by the bitcoin network. So the miner need to repeatedly try until he come up with such a nonce that satisfy the difficult requirement.



Q: How does consensus affect mining of bitcoin?

### Proof of Stake (POS)

Reference & Credit: https://courses.blockgeeks.com/lesson/proof-of-stake-2/

Q: What are the painpoint of proof of work?
A: 
- wasteful: all nodes are competing with other to solve cryptographic puzzle, only one winner i.e. only one node's work end up to be in the blockchain & the winner take all the reward, the rest nodes are losers and the loser's work are all wasted. The wasted computation consumes tons of electricity and detrimental to the environment (2022 bitcoin mining consume the electricity of Demark)

- inefficient: POW is slow to consensus, lower the network throughput.

Q: What is proof of stake
- any node participating mining put down a stake/deposit and join a pool of miners.
- the higher the stake, the bigger chance of being selected to mine the next block. It's similar to POW, the more computation power you have, the bigger chance you sucessuflly mine a new block.
- if a miner is malicious and try to double spend, he will lose their stake/deposite and his privilege to be part of the mining pool.

Q: What advantage of POS over POW?
- not wasteful: 1. only one miner is selected to mine a new block instead of multiple miner are competing to mine a new blcok, and thus POS consume much less electricity than POW. 2. it does not require its selected miner to solve a difficult and time-consuming cryptographic puzzle before posting a new block. Instead of using computation power, nodes are selected based on the monetary stake they put down. Once a node is selected to mine, they just create a block of transactions and post it to the blockchain.

- more efficient: depend on the algo, it allows for faster mining of coin and thus bigger throughput, faster blockchain.
- more secure than POW: POS has stronger penalty to malicious behavior than POW. It is hard to acquire 51perc the supply of a cryptocurrency in a blockchain than it is to acquire 51perc computational power. If you put down 51 perc of stake, you can loss that 51 perc stake if you are not selected; in contract, in POW, if you have 51 perc computational power, you will NOT lose that hardware in case your block is not selected to add to the chain.
Q: How proof of stake work?
- randomized selection algo: a formula is used to select miner based on the stake they put down + some hash value
$$selected miner = random_selection(miner's stake, hash value)$$

- coin age selection algo: 
    - coin age = number of stake * number of days of stake
    - selected miner = fn(random_selection(), coin age)
    - usually a miner need to wait for 30 days to be selected; once a miner is selected, his coin age is reset back to 0.



### Incentives on Blockchain
References & Credits: https://courses.blockgeeks.com/lesson/incentives-on-the-blockchain/

Q: what is economics?

A: economics study how people make decision and how to design incentives so that people act toward the objective you set up. The decisions are usually make to maximize some objectives under certain constraints. It fits into the framework of Optimization and Reinforcement Learning:
- Optimization: In order to optimize (max/min) the objective function, you adjust the decision variables which are under certain constraints.

- Reinforcement Learning: In order to maximize the long term return, you the agent adjust your strategy to act under various circumstance (state) which will give you instant reward and move you to another circustance (state*). State-ActionStrategy-Action-Reward-newState (SAARS).

Q: How does bitcoin economics work? (i.e. what is the incentive in bitocoin so that people are motivated to help instead of hurt)

- In short, Bitcoin system is designed in such a way that the cost of covering up your double spending of bitcoin will be NX (e.g. N=10) the benifit of double spending.

### Game theory
Ref: https://courses.blockgeeks.com/lesson/game-theory-2/
Q: What is game theory?
A: Game theory study how people make decisions under the context of guessing how their opponent make decisions.

Q: How does game theory applied in blockchain?
A: Work backwards to design a game where each player working in their own self-interest produces the best outcome for the network

**Proof of work** is a game where the `Nash Equilibrium` is all the miners contributing to the longest chain and mining only valid blocks.

In the view of game theory, what differentiate **Proof of Stake** vs Proof of work?
- In proof of stake, the process for becoming a miner is more selective
- The penalty for cheating in proof of stake is a lot higher
- Proof of stake consumes a lot less energy

![](images/cryptoecon-game-theory0.png)
![](images/cryptoecon-game-theory1.png)
![](images/cryptoecon-game-theory2.png)

Ref: https://blockgeeks.com/guides/blockchain-consensus/

### Applications of cryptoenconomics
Reference & credits: https://courses.blockgeeks.com/lesson/applications-of-cryptoeconmics/

- consensus protocols
    - proof of work: solving puzzles and receiving reward i.e. Bitcoin
    - proof of stake: i.e. Etherem
    
- what if commerce become global & boarderless?
- what if banking become decentralized?
- what if organization (gov, com, org) become decentralized & self-organized (DAO)?

- finance implications
    - ICO: raise funding globally
    - create your own currency
    - cryptocurrency exchange
- goverance implications
    - programmable legal contract
    - decentralized goverments
    - transparent election

- underlying technologies: bitcoin->blockchain
- unifying principles: crypto-enconomics    


## Advanced Crypto Economics
### Intro Advanced CrytoEconomics

Source: https://courses.blockgeeks.com/lesson/introduction-to-advanced-cryptoeconomics/

Crypto: <=, => Econ =>
tools:

cryto_tools = {'hash function':None, 'digital signiture':None, 'ZKsnarks':None, 'timelock':None}

econ_tools = {'token':None, 'voting right':None, 'bribing attack':None, 'auction':None}

Q: what do these tool good for?

A: the combination of these tools push forward both good and bad:
pros = {'access': open, 'finality speed': fast, 'control': decentralized, 'cost': low}

cons = {'access': close|censorship, 'finality speed': slow, 'control': centralized, 'cost': high}

Q: what are majority chain (main chain) vs minority chain, what they come into being and evolve?

There 3 kinds of people in a blockchain:
- Full node: who keep a full copy of the blockchain and validate new block
- Developer:maintain the code
- miner: consume electricity and computation to mine block

- main chain: the longest chain with most accumulative efforts, the longest chain is likely to become the main chain

### Public Key Cryptograph

Source: https://courses.blockgeeks.com/lesson/ce101-public-key-cryptography/

Q: What are the 4 goal of cryptography?
A: Cryptography makes info sent from A to Bs under uncertain Condictions true and safe:
1. Integrity: the message I send arrive at the expected distination without changed.
1. Authenticity: I can assure that the sender and receipients of the message are the correct ones.
1. Unreputatable: a event that has happened can not be denies
1. Confidential: info intended to be private will be kept private.

Q: Public Key (pk) vs Secret Key (sk)
- pk is generated by sk
- Publiv Key Cryptography allow you encrypt a private info using public key from somebody's private key so that only that person owning the private key can decrypt the private info. 

Q: Symmetric Key vs Asymetric Key

- symetric key uses the same key for encryption and decryption. The problem w. symetric key is: if Alex want to communicate with Bob in secret, Alex use his secret key X to encode his message, then Bob need that secret key X to decode Alex's message. The same thing happen to Bob: when Bob uses his secret key Y to encode his message, then Alex need secret key Y to decode Bob's message. This kind of info exchange requires Alex and Bob have their secret keys exchanged. How to exchange secret key in an unsafe communication channel is called `Key Exchange Problem`.

- 1900's Arthur Serbia invented Enigma Machine which allows people to make scramble message and decode it using the same key, symetric key.

- [Whitefield Diffie and Marty Hellman's 1976 paper `New Directions in Cryptography`](https://news.stanford.edu/2016/03/01/turing-hellman-diffie-030116/) took Ralph Merkel's idea on how to transmit secure info over insecure means. This can be illustrated by secret color exchange: Alice has her secret color pink and Bob has his secret color blue; both Alice and Bob use a public color Yellow to mix their individual secret color. The mixed color is very difficult to unmix even you know the public color Yellow. When Alice receive Bob's mixed color, she mix the mixed color with her secret color Pink, she get mixed color = mix(Blue, Yellow, Pink); the same thing for Bob: after he receive Alice mixed color, he mix it with his secret color Blue, then Bob get the same mixed color = mix(Pink, Yellow, Blue) as Alice does. Now, Alice can decode Bob's secret message by key mix(Blue, Yellow, Pink) and Bob can decode Alice's secret message by key mix(Pink, Yellow, Blue).

**Priority reading**: [A new map for relationship] (https://ee.stanford.edu/~hellman/publications/book3.pdf) by [Martin Hellman](https://ee.stanford.edu/~hellman/), a crypto legacy and Stanford professor. 

### Cryptographic Math



Source: https://courses.blockgeeks.com/lesson/cryptographic-math/
Explain Diffie & Hellman's key exchange by math:

p & g are 2 numbers Alice and Bob agreed to beforehand. (p and g stands for Prime & Generator). 
- p = modulus e.g. a clock is Mod12, which groups '1' and '13' together, '2:23' and '14:23' togehter, '3:33' and '15:33' together.
- g = base e.g. '12' in clock Mod12

Modulus P and Base G st.
1. p(e.g. 7) & g (e.g. 3) are coprime, e.g. greatest_common_divisor of p and g is 1 $$gcd(7,3)==1$$


1. g (e.g. 3) is a [`primitive root modulo p`](https://en.wikipedia.org/wiki/Primitive_root_modulo_n) (e.g. 7), e.g. For any number a that is coprime to p (e.g. gcd(a,p=7)=1), there exist an exponent x where $$g^x mod p=7 ==a mod p=7$$ (g^x equ to a in the sense of mod 7)

e.g. 3^x mod 7 == a mod 7

These conditions all us easily make these numbers into a result that is difficult to reverse engineer. The finite algebra structures allow us to 

- prevent outputs from blowing up in size
- prevent the length of output from revealing the input

p = 7, g = 3
- Q: are p & g coprime? A: gcd(7,3)==1, A: Yes
- Q: is 3 a `primitive root mod 7`? A: For all a, Exist x s.t. 3 is x-root of a in the sense of mod 7, e.g. a mod 7 == 3^x mod 7 (a == 3^x in sense of mod 7). A: Yes.

Q: what are the difference between a == b vs a mod p == b mod p?

- example: you and your grandpa have the same **birthday**, says, 07/04, because you **birthdate** 07/04/2014 are equal to your grandpa's birthdate 07/04/1939 in the sense of mod 365. i.e. 07/04/2014  mod 365 days == 07/04/1939 mod 365 days.

- example: I wake up at the same hour of today as yesterday, e.g. 7am. It does not mean the wake up time today 01/26/2022 7am is the same as the wake up time yesterday 01/25/2022 7am, it only means that the 2 time are equal after you mod them by 24 hr. 

Q: what is the difference between $3^x = a$ and $3^x mod 7 = a mod 7$?
A: $3^x = a$ means 3 is x-root of $a$ e.g. $3 = a ^(1/x)$
while $3^x mod 7 == a mod 7$ means 3 is x-root of a in the sense of mod 7.

STEP1:

    - Alice and Bob agree on using p=7 and g=3 to do secret communication. Let's check p & g satisfy 1) gcd(3,7)=1,yeah!! 2)g=3 is a primitive root modulo p=7, yeah!!

STEP2:

    - Alice picks her secret number a=10 and calculates her public value A=(g=3)^(a=10) mod(p=7) = 3^10mod7 = 4, which is broadcasted to the public.

    - Bob picks his secret number b=8 and calculate his public value B= (g=3)^(b=8) mod(p=7) = 3^8mod7 = 2, which is broadcasted to the public.

STEP3:
    - Alice receives Bob's pubilcated number B=2 and then calculate her secret s = (B=2)^(a=10) mod(p=7)=2^10mod7=2
    - Bob receives Alice publicated number A=4 and then calculate his secret s=(A=4)^(b=8) mod(p=7)=4^8mod8=2
    - Now both Alice and Bob has the same shared secret $2$ just between themselves, nobody else.
    - An ear-droper knows all these public available info: $A=4, B=2, p=7,g=3$, but need to figure out $s$ by guessing $a$ and $b$. It's a very difficult puzzle.
    
    
Q: Why this works mathematically?
A: **Prime Multiplicative Groups**: when a prime modulus (says, $mod p = mod 7$) is used, each exponential increment will return a continuous pattern of each positive integer below the modulus 7.


e.g. **3^0 mod7 = 1 mod7** -> 3^1 mod7 = 3 mod7 ->3^2 mod7 = 2 mod7 ->3^3 mod7 = 6 mod7 -> 3^4 mod7 = 4 mod7 ->3^5 mod7 = 5 mod7 -> **3^6 mod7 = 1 mod7** (NOW back to the starting point)

Abelian Group: the group operation (multiplication) can be performed on any two elements in any order. e.g. $A^b modp = B^a modp = G^(ab) modp = G^(ba) modp$


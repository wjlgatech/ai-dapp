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
    

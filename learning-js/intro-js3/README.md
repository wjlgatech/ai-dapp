## Objectives
- learn js data types & operations
    - number
    - string
    - boolean
    - object
    - function
    - array

## References & Credits
- [video](https://courses.blockgeeks.com/lesson/javascript-part-2-2-2/)

- [A re-introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- 
## Note 

Open up a terminal, go to your folder e.g. `cd /Users/my-account-name/Documents/ai-dapp/learning-js/js-variables-operations`, and start your experiments:

```zsh
\u@\h \W\[\033[32m\]$(parse_git_branch)\[\033[00m\] $ c example.js
\u@\h \W\[\033[32m\]$(parse_git_branch)\[\033[00m\] $ node
Welcome to Node.js v16.13.1.
Type ".help" for more information.
> //number. string. boolean. object. function. array. 
> var x = 3.14
undefined
> x
3.14
> typeof(x)
'number'
> typeof x
'number'
> x = 'some string'
'some string'
> typeof x
'string'
> x = true
true
> typeof x
'boolean'
> 
> 
> var x = 'something else'
undefined
> x
'something else'
> 
> x = function() { console.log('inside of x')}
[Function: x]
> typeof x
'function'
> //how to invole the function
undefined
> x()
inside of x
undefined
> 
> 
> var yield
undefined
> var y 
undefined
> typeof y
'undefined'
> 
> 
> y=null
null
> typeof y
'object'
> //js variable  is not a static dtype 
undefined
> 
> // var vs let
undefined
> let x = 3.33
Uncaught SyntaxError: Identifier 'x' has already been declared
> //var is function scope vs let is {} block scope
undefined
> function printX() {
... console.log(x);
... }
undefined
> printX()
[Function: x]
undefined
> var x = 777
undefined
> x
777
> printX()
777
undefined
> 
> 
> 
> function printY(){
... var y = 'hello Y here!!!'
... console.log(y);
... }
undefined
> printY()
hello Y here!!!
undefined
> y
null
> 
> printY()
hello Y here!!!
undefined
> 
> 
> 
> function printZ(){
... let z = true;
... console.log(z);
... }
undefined
> 
> 
> printZ()
true
undefined
> 
> 
> const w = 'something fixed'
undefined
> w = 'something else'
Uncaught TypeError: Assignment to constant variable.
> // const variable  is NOT immutable
undefined
> const z = {a:1, b:2}
undefined
> z
{ a: 1, b: 2 }
> z = {c:3}
Uncaught TypeError: Assignment to constant variable.
> z.a = 11
11
> z
{ a: 11, b: 2 }
> z.b=222
222
> z
{ a: 11, b: 222 }
> 
> 
> let someString = 'this is my string'
undefined
> someString.length
17
> someString + ' and this is another string'
'this is my string and this is another string'
> someString
'this is my string'
> someString += ' and this is another string'
'this is my string and this is another string'
> var someString2 = someString + 'something new !!!'
undefined
> someString2
'this is my string and this is another stringsomething new !!!'
> 
> 
> 
> someString
'this is my string and this is another string'
> someString.length
44
> someString.charAt(-1)
''
> someString.charAt(-2)
''
> someString.charAt(0)
't'
> someString.charAt(2)
'i'
> someString.charAt(3)
's'
> someString.charAt(someString.length-1)
'g'
> someString.indexOf('h')
1
> someString.indexOf('t')
0
> someString.indexOf('is')
2
> //string.replace('something', 'something else')
undefined
> someString.replace('is', 'was')
'thwas is my string and this is another string'
> someString3 = someString.replace('is', 'was')
'thwas is my string and this is another string'
> someString3
'thwas is my string and this is another string'
> someString.toUpperCase()
'THIS IS MY STRING AND THIS IS ANOTHER STRING'
> someString.toLowerCase()
'this is my string and this is another string'
> 
> 
> 
> //boolean operation
undefined
> var bool = true
undefined
> typeof bool
'boolean'
> if bool:
if bool:
   ^^^^

Uncaught SyntaxError: Unexpected identifier
> if(bool) {
... console.log('the condition is true')
... }
the condition is true
undefined
> b1 = true
true
> b2 = false
false
> if(b1 & b2){
... console.log('b1 & b2 is true')
... }
undefined
> b1 | b2
1
> b1 & b2
0
> b1 && b2
false
> //& vs &&
undefined
> //&&: short circuit evaluation, it stop asap it find the 1st false value in your expression
undefined
> b1
true
> b1 || b2 //if b1 is true, it stops checking the rest of the expression i.e. the value of b2
true
> 
> 
> var os
undefined
> var prptA = os.prptA
undefined
> var os
undefined
> var z
Uncaught SyntaxError: Identifier 'z' has already been declared
> var V
undefined
> var propA = V && V.propA
undefined
> propA
undefined
> var propA = V.propA
Uncaught TypeError: Cannot read properties of undefined (reading 'propA')
> V.propA
Uncaught TypeError: Cannot read properties of undefined (reading 'propA')
> V = {propA: 'some property of A'}
{ propA: 'some property of A' }
> var propA = V.propA
undefined
> propA
'some property of A'
> 2 == 2
true
> 2 === 2
true
> 2 === 3
false
> //'===' check both value and dtype VS '==' only check the valueOf
undefined
> 2 == '2]
2 == '2]
     ^^^

Uncaught SyntaxError: Invalid or unexpected token
> 2 == '2'
true
> 2 === '2'
false
> // conclusion: use triple = instead of double = 
undefined
> 3 != 3
false
> 3 != '3'
false
> 3 !== '3'
true
> //conclusion: alway use '!==' instead of '!='
undefined
> 
> 
> // array []
undefined
> arr = []
[]
> arr.push(1.23)
1
> arr
[ 1.23 ]
> arr.push('2nd element')
2
> arr
[ 1.23, '2nd element' ]
> arr[2] = '3rd thing'
'3rd thing'
> arr
[ 1.23, '2nd element', '3rd thing' ]
> arr[5] = 555
555
> arr
[ 1.23, '2nd element', '3rd thing', <2 empty items>, 555 ]
> arr.length
6
> for(var i=0; i<arr.length; i++){
... console.log(arr[i]);
... }
1.23
2nd element
3rd thing
undefined
undefined
555
undefined
> //not what I want; want to print only the non empty valueOf
undefined
> for (var i of arr){
... console.log(i)
... }
1.23
2nd element
3rd thing
undefined
undefined
555
undefined
> 
> 
> for (var i in arr){
... console.log(i)
... }
0
1
2
5
undefined
> 
> //we printed out the index instead of the value of arr; now we print the value of arr
undefined
> 
> for (var i in arr){
... console.log(arr[i])
... }
1.23
2nd element
3rd thing
555
undefined
> 
> //arr.forEach()
undefined
> arr.forEach(val =>{console.log(val)})
1.23
2nd element
3rd thing
555
undefined
> 
> 
> // reverse of arr
undefined
> arr.reverse()
[ 555, <2 empty items>, '3rd thing', '2nd element', 1.23 ]
> arr
[ 555, <2 empty items>, '3rd thing', '2nd element', 1.23 ]
> arr.reverse()
[ 1.23, '2nd element', '3rd thing', <2 empty items>, 555 ]
> 
> 
> arr = [3, 5, 7, 9]
[ 3, 5, 7, 9 ]
> // filter function: filter out according to condition 
undefined
> arr.filter(val => {return val > 6})
[ 7, 9 ]
> arr = ['boy', 'girl', 'man', 'woman']
[ 'boy', 'girl', 'man', 'woman' ]
> arr.filter(val => {return val.indexOf('o')>=0)
arr.filter(val => {return val.indexOf('o')>=0)
                                             ^

Uncaught SyntaxError: Unexpected token ')'
> arr.filter(val => {return val.indexOf('o')>=0 })
[ 'boy', 'woman' ]
> 
> //arr.map()
undefined
> arr.map(val => {return val + 'funny'})
[ 'boyfunny', 'girlfunny', 'manfunny', 'womanfunny' ]
> arr.map(val => {return val.toUpperCase()})
[ 'BOY', 'GIRL', 'MAN', 'WOMAN' ]
> 
> 
> // declare object
undefined
> var obj = {}
undefined
> obj
{}
> obj = {a:'cat', b:'dog'}
{ a: 'cat', b: 'dog' }
> obj.a
'cat'
> obj.d
undefined
> obj.b
'dog'
> obj.a === obj['a']
true
> obj = {a:'here is a', b:'here is b', c: function(){console.log('inside function c')}}
{ a: 'here is a', b: 'here is b', c: [Function: c] }
> obj.c
[Function: c]
> obj.c()
inside function c
undefined
> 
> 
> //class: a template for an object
undefined
> 
> //import a class
undefined
> require('./example.js')
doSomething
{}
> var Rec = require('./rectangle.js')
Uncaught Error: Cannot find module './rectangle.js'
Require stack:
- <repl>
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '<repl>' ]
}
> pwd
Uncaught ReferenceError: pwd is not defined
> ls
Uncaught ReferenceError: ls is not defined
> // to exit node, type .exit
undefined
> // require('web3') get the 'web3' module
undefined
> var r1 = new Rectangle(10, 20)
Uncaught ReferenceError: Rectangle is not defined
> // node does not recognize the module; exit node and come back in
\u@\h \W\[\033[32m\]$(parse_git_branch)\[\033[00m\] $ node
Welcome to Node.js v16.13.1.
Type ".help" for more information.
> var Rectangle = require('rec.js')
Uncaught Error: Cannot find module 'rec.js'
Require stack:
- <repl>
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '<repl>' ]
}
> var Rectangle = require('./rec.js')
undefined
> var r1 = new Rectangle(10, 20)
undefined
> r1
Retangle { height: 10, width: 20 }
> r1.getArea()
200
> 

```


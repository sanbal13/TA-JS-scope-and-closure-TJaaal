Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

Example:

```js
function hello() {
  var username = 'Arya';
}
console.log(useranme); // output
```

In above code we are looking for the variable named `usename`. There is no variable named `username` in the global scope. The variable is inside the function named `hello` and we can't access the variable defined inside a function from outside.

The above code will throw an error `Reference Error username is not defined`.

2. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
{
  const username = 'Arya';
}
console.log(useranme); // output
```

In above code we are looking for the variable named `username`. There is no variable named `username` in the global scope. The variable is inside a block and we can't access the const  defined inside a block from outside.

The above code will throw an error `Reference Error username is not defined`.

3. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  let username = 'Arya';
}
console.log(useranme); // output
```

In above code we are looking for the variable named `username`. There is no variable named `username` in the global scope. The variable is inside a block and we can't access the  variable defined using let inside a block from outside.

The above code will throw an error `Reference Error username is not defined`.

4. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  var username = 'Arya';
}
console.log(useranme); // output 'Arya'
```
Here we are looking for the variable named `username`. The variable `username` is within a block. It is not present in the global scope. But the variable 
`username` is defined using var keyword. Hence it can be accessed outside the block as it has functional scope.

5. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
if (true) {
  var username = 'Arya';
}
console.log(useranme); // output
```
Here we are looking for the variable named `username`. We can see that username is defined in the global scope. And also inside the if block it is defined using var keyyword. Hence we get Syntax Error that username is already defined.

6. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
if (true) {
  let username = 'Arya';
}
console.log(useranme); // output 'John'
```
Here we are looking for the variable named `username`. The variable is defined in the global scope as well as in the if block. But in the if block it is defined using the let keyword. Hence the scope in this case is block scope. Now, when we acces the variable outside the block we get the value of `username` from the global scope.

7. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = 'John';
function sayHello() {
  let username = 'Arya';
}
sayHello();
console.log(useranme); // output 'John'
```
Here we ar looking for the variable `username`. There are two versions of this variable, one that belogs to the global scope and the other one which belongs to the fuctional scope of the function sayHello(). Here we get the value from the global scope as variable declared using let inside a function has functional scope.

8. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (var i = 0; i < 10; i++) {
  console.log(i, 'First'); // output 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log(i, 'Second'); // output 10
```
Here we are looking for the variable `i`. The variable is declared using the var keyword. Hence it is accessible outside the for loop as well.
Inside the for loop it takes values from 0 through 9 and outside the for loop it has the value of 10.

9. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (let i = 0; i < 10; i++) {
  console.log(i, 'First'); // output
}
console.log(i, 'Second'); // output
```
Here we are looking for the variable `i`. The variable is declared using the let keyword. Hence it is not accessible outside the for loop as it has block scope.
Inside the for loop it takes values from 0 through 9 and outside the for loop it returns a reference error that `i` is not defined.
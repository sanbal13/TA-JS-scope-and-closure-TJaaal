1. Convert the function below into different forms of function expression.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}

// Your code goes here
let percent = function percentage(marks, total) {
  return (marks * 100) / total;
}

let percent = function (marks, total) {
  return (marks * 100) / total;
}

let percent = function (marks, total) => {
  return (marks * 100) / total;
}
```

2. Write Function Declaration or Function Expression next to the function.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}
// Your answer
let percent = function (marks, total) {
  return (marks * 100) / total;
};
```

```js
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
};
// Your Answer
function percentage(marks, total) {
  return (marks * 100) / total;
}
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};
//Your Answer
function percentage(marks, total) {
  return (marks * 100) / total;
}
```

```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
//Your Answer
function percentage(marks, total) {
  return (marks * 100) / total;
}
```

```js
let percentage = (marks, total) => (marks * 100) / total;
//Your Answer
function percentage(marks, total) {
  return (marks * 100) / total;
}
```

3. Why is a function definition an expression in JavaScript? Give one example of function expression.  
In JavaScript function is an object. We can assign an object to a variable. So, we can asign a function to a variable. Therefore, function definition acts as an expression in JavaScript.
```js
let add = function (a, b) {
  return a + b;
} 
```


4. Why is a function call an expression in JavaScript?
    * function call does not start with a `function` keyword. So, it cannot be a function definition.
    * function call can be assigned to a variable in which the returned value will be stored. Hence it is an expression.

5. Write VALID and INVALID next to each example below with the reason.

```js
function add(a, b) {
  return a + b;
}

let five = add(2, 3); // VALID //A function call can be assigned to a variable
five = add; // VALID //The function definition of add is stored in five.
five = five(10, 11); // VALID //the result of function call is stored in five.
five = function () {
  return 'Hello';
}; // VALID function reference is stored in five
```

6. What is the difference between function definition and function call? Explain with an example.
* `function definition` is the set of steps to performed to do a particular task
* `function call` is the actual execution of the set of steps.
```js
  function add(a, b) {         //function definition
    return a + b;
  }
  let addition = add(2,3);     //function call
  ```

7. What is the similarities between function definition and function call?


8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // VALID //hello is a function. A function in js is an object. So, user is a key of hello in which the value Sam is stored. 
```

9. What is higher order function explain with an example.  
Higher order function is the one which either accepts function as an argument or returns function or both.
```js
function multiplyBy(num) {
    return function(num2) {
        return num * num2;
    }
}

function filter(arr, cb) {
    let finalArray = [];
    for(let num of arr) {
        if(cb(num)){
            finalArray.push(num);
        }
    }
    return finalArray;
}
```

10. Explain what is callback function. Why you can pass a function inside a function?  
Callback function is a function which is passed as an argument to a Higher Order Function.
function is an object which in turn is an expression, so we can pass a function to another function.

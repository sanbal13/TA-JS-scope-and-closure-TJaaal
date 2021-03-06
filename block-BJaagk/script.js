/* let numbers = [1, 3, 4, 6, 7, 8, 9, 90, 34, 45];

let isOdd = function (num) {
    return num % 2 !== 0;
};
let isEven = function (num) {
    return num % 2 === 0;
};

//Higher order function
function filter(arr, cb) {
    let finalArray = [];
    for(let num of arr) {
        if(cb(num)){
            finalArray.push(num);
        }
    }
    return finalArray;
}

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven)); */

function multiplyBy(num) {
    return function(num2) {
        return num * num2;
    }
}

let multiplyBy10 = multiplyBy(10);
let multiplyBy5 = multiplyBy(5);
console.log(multiplyBy10(5));
console.log(multiplyBy5(10));
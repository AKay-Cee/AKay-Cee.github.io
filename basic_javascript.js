// 1
function max(a, b) {
    if (a > b) return a;
    else return b;
}
function myFunctionTest(a, b) {
    if (a == b) console.log("TEST SUCCEEDED");
    else console.log("TEST FAILED");
}
console.log("Expected output of max(3,4) is 4 and my result is " + max(3, 4));
myFunctionTest(4, max(3, 4));
//console.log(max(3, 4));

//2
function maxOfThree(a, b, c) {
    return (a > b && a > c) ? a : (b > c) ? b : c;
}
console.log("Expected output of maxOfThree(4,3,5) is 5 and my result is " + maxOfThree(4, 3, 5));
myFunctionTest(5, maxOfThree(4, 3, 5));
//console.log(maxOfThree(4, 3, 5));

//3
function isVowel(a) {
    if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') return true;
    else return false;
}
console.log("Expected output of isVowel('a') is true and my result is " + isVowel('a'));
myFunctionTest(true, isVowel('a'));
//console.log(isVowel('a'));

//4
function sum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log("Expected output of sum([2,3,4]) is 9 and my result is " + sum([2, 3, 4]));
myFunctionTest(9, sum([2, 3, 4]));
//console.log(sum([2, 3, 4]));
function multiply(a) {
    let multiply = 1;
    for (let i = 0; i < a.length; i++) {
        multiply *= a[i];
    }
    return multiply;
}
console.log("Expected output of multiply([2,3,4]) is 24 and my result is " + multiply([2, 3, 4]));
myFunctionTest(24, multiply([2, 3, 4]));
//console.log(multiply([2, 3, 4]));

//5
function reverse(a) {
    let retval = '';
    for (let i = a.length - 1; i >= 0; i--) {
        retval += a.charAt(i);
    }
    return retval;
}
console.log("Expected output of reverse('apple') is elppa and my result is " + reverse('apple'));
myFunctionTest('elppa', reverse('apple'));
//console.log(reverse('apple'));

//6
function findLongestWordLength(a) {
    let longest = '';
    for (let i = 0; i < a.length; i++) {
        if (longest.length < a[i].length) longest = a[i];
    }
    return longest.length;
}
console.log("Expected output of findLongestWordLength(['apple','ball']) is 5 and my result is " + findLongestWordLength(['apple', 'ball']));
myFunctionTest(5, findLongestWordLength(['apple', 'ball']));

//console.log(findLongestWord(['apple', 'ball']));

//7
function filterLongWords(arr, i) {
    let newarr = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length > i)
            newarr.push(arr[j]);
    }
    return newarr;
}
let array = ["apple", "ball", "cat", "apples", "crow"];
console.log("Expected output of filterLongWords(['apple','ball','cat','pappu'],4) is ['apple','pappu']  " + arrayEquals(["apple", "pappu"], filterLongWords(["apple", "ball", "cat", "pappu"], 4)));

//8

const a = [1, 3, 5, 3, 3];

//a) multiply each element by 10

function multiplyElements(a) {
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    });
    return b;
}


function filterNumber(a) {
    const c = a.filter(function (elem, i, array) {
        return elem == 3;
    });
    return c;
}

function reduceToMultiply(a) {
    const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    }, 1);
    return d;
}


console.log("Expected output of multiplyElements([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]  " + arrayEquals([10, 30, 50, 30, 30], multiplyElements(a)));
console.log("Expected output of filterNumber([1, 3, 5, 3, 3]) is [ 3, 3, 3 ] " + arrayEquals([3, 3, 3], filterNumber(a)));

console.log("Expected output of reduceToMultiply([1, 3, 5, 3, 3]) is 135 and my result is " + reduceToMultiply([1, 3, 5, 3, 3]));
myFunctionTest(135, reduceToMultiply([1, 3, 5, 3, 3]));

function arrayEquals(a, b) {
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])) {
        return "TEST SUCCEEDED.";
    } else {
        return "TEST FAILED.";
    }
}
//console.log(multiplyElements(a));
//console.log(filterNumber(a));
//console.log(reduceToMultiply(a));
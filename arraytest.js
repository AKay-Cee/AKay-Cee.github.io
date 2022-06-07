let array = [2, 3, 4, 5, 6, 8, 4, 2, 3, "hello", true];
let string1 = "hello";
let array1 = [30, "apple", { a: 1 }];
array3 = ['convert', 'array', 'to', 'string'];
let arrfunction = require("./arrayexport");
//1. print the array of odd numbers from given array
console.log("array of odd numbers: ");
console.log(arrfunction.oddnumbers(array));
//2. sum of values which are divisiable by 4
console.log("sum of numbers div by 4");
console.log(arrfunction.sumOfDiv4(array));
//3. find the unique numbers in the array
console.log("array of unique numbers");
console.log(arrfunction.uniqueArray(array));
//4. transform array to array of type
console.log("Array of type")
console.log(arrfunction.typeArray(array1));
//5. Destructure array
console.log("Destructure array");
console.log(arrfunction.destructure(array1));
//6. find index of first odd number
console.log("first odd index");
console.log(arrfunction.firstOddNumIndex(array));
//7. convert string to array
console.log("String to array");
console.log(arrfunction.stringToArray(string1));
//7. array to string
console.log("Array to String");
console.log(arrfunction.arrayToString(array3));

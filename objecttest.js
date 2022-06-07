let obj1 = { a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } };
let array2 = [{ a: 1, b: 2 }, { a: 2, b: 4 }];
let array1 = [{ name: 'Ram', age: 20 }, { name: 'Lakshman', age: 15 }];

let objfunction = require("./objectexport");
//1. convert object to array
console.log("convert object to array");
console.log(objfunction.objToArray(obj1));

//2. minify object
console.log(objfunction.minifyobj(array2));

//3. get the oldest person age
console.log(objfunction.findOldestPerson(array1));

//4. get the youngest person name
console.log(objfunction.findYounger(array1));

//5.find the person whose age is between 16 and 17 years.
console.log(objfunction.filterage(array1));
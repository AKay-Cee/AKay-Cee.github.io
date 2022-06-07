let array = [2, 3, 4, 5, 6, 8, 4, 2, 3, "hello", true];

//function to update array
function updateArray(arr, i, val) {
    arr[i] = val;
    return arr;
}

//array to odd numbers
function oddnumbers(arr) {
    let newarr = [];
    for (element of arr) {
        if (element % 2 != 0) {
            newarr.push(element);
        }
    }
    return newarr;
}

//console.log(oddnumbers(array));

//sum of all numbers divisible by 4
function sumOfDiv4(arr) {
    let sum = 0;
    for (element of arr) {
        if (element % 4 == 0) {
            sum += element;
        }
    }
    return sum;
}
//console.log(sumOfDiv4(array));

//unique numbers in an array
function uniqueArray(arr) {
    let retarr = [];
    for (let i = 0; i < arr.length; i++) {
        let hasduplicate = false;
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue;
            if (arr[i] == arr[j]) {
                hasduplicate = true;
                break;
            }
        }
        if (!hasduplicate) {
            retarr.push(arr[i]);
        }

    }
    return retarr;
}
//console.log(uniqueArray(array));

//transform the array to print type

function typeArray(arr) {
    let retarr = [];
    for (element of arr) {
        retarr.push(typeof element);
    }
    return retarr;
}
//console.log(typeArray(array));

let array1 = [50, "apple", { a: 1 }];
//destructure array
function destructure(arr) {
    let retobj = {};
    console.log(" Here ")
    for (let i = 0; i < arr.length; i++) {
        let property = typeof arr[i] + i;
        retobj[property] = arr[i];
    }
    return retobj;
}
//console.log(destructure(array1));

//find index of first odd number non array method
function firstOddNumIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return i;
        }
    }
}

//find index of first odd numnber using array method
function firstOddNumIndex1(arr) {
    return arr.findIndex(a => a % 2 != 0)
}

//convert array to string
function arrayToString(arr) {
    let retStr = "";
    for (element of arr) {
        retStr += " " + element;
    }
    return retStr;
}
//convert string to array using split
function stringToArray1(arr) {
    let retarr = arr.split(" ");
    return retarr;
}

//convert string to array(not using split)
function stringToArray(arr) {
    let retarr = [...arr];
    return retarr;
}

module.exports = { sumOfDiv4, oddnumbers, uniqueArray, typeArray, destructure, updateArray, typeArray, firstOddNumIndex, firstOddNumIndex1, arrayToString, stringToArray1, stringToArray };



//let obj1 = { a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } };
//1. convert object to array
function objToArray(obj) {
    let retarr = [];
    // let key
    for (let key in obj) {
        // key , obj[key]
        if (typeof (obj[key]) == 'object') {
            // console.log(obj[key])
            if (Array.isArray(obj[key])) {
                obj[key].forEach(element => {
                    retarr.push(key + element)
                });
            } else {
                // let key1 = key
                objToArray(obj[key])

                    .forEach(element => {
                        // console.log(key1)
                        retarr.push(key + element)
                    });
                // retarr.(objToArray(obj[key]))
            }

        } else {
            //console.log("processing the primitive value", obj[key])
            retarr.push(key + obj[key])
        }
    }

    return retarr;
}
//console.log(objToArray(obj1));

//2. minify object
//let array2 = [{ a: 1, b: 2 }, { a: 2, b: 4 }];
function minifyobj(arr) {
    let result = [];
    arr.forEach(el => {
        let { a } = el;
        result.push({ a })
    })
    return result;
}
//console.log(minifyobj(array2));
//3. get the oldest person age
//let array1 = [{ name: 'Ram', age: 20 }, { name: 'Lakshman', age: 15 }];

function findOldestPerson(arr) {
    return arr.reduce(function (prev, element, index, array) {
        return element.age > prev.age ? element.name : prev.name;
    })
}
//console.log(findOldestPerson(array1));

//4. get the youngest person name
function findYounger(arr) {
    return arr.reduce(function (prev, element) {
        return prev.age > element.age ? element.age : prev.age;
    })
}
//console.log(findYounger(array1));

//5.find the person whose age is between 16 and 17 years.
function filterage(arr) {
    let retarr = arr.filter(function (element) {
        return (element.age >= 16 && element.age <= 17);
    })
    return retarr;
}
//console.log(filterage(array1));
module.exports = { objToArray, minifyobj, findOldestPerson, findYounger, filterage };
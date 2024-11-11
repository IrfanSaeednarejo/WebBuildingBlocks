let myInteger = 25;


let myFloat = 3.14;

let myBoolean = true;

let myString = "Hello, World!";

// Date
let myDate = new Date(); 


let myUndefined; 


let myIntArray = [1, 2, 3, 4, 5];


let myStringArray = ["apple", "banana", "cherry"];


let myMixedArray = [42, "hello", true, null, { key: "value" }];


let myObject = {
    ID: 1,
    Name: "ABC"
};

for (let x of myMixedArray) {
    console.log(x);
}

function printStringProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


let newObject = {
    name: "Irfan Saeed",
    age: 19,
    occupation: " Web Developer",
    city: "Pakistan",
    isEmployed: true
};

printStringProperties(newObject);

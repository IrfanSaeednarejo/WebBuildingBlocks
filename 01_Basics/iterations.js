// const maps= new Map();

// // Adding keys and values.
// maps.set('js','javascript');
// maps.set('java','javaide');
// maps.set('rb','ruby');
// maps.set('plain','aeroplane');

// //printing map keys and values through forof loop type. can't use forof for objects.

// for(const [keys,values] of maps){
//     console.log(keys,' :- ',values);
// }

const myobject= {
    game1: "NFS",
    game2: "Nitrite",
    game3:"Fortnite",
    game4: "Free Fire"
}
// printing object keys and values using forin loop. can't use forin for maps
for(const keys in myobject){
    console.log(`${keys} value is ${myobject[keys]}`);
}




// will be used when total iterations are almost known

// for(let i=0; i<15 ;i++){

//     console.log(i)
// }


let i=0;

// will be used when total iterations are unknown
// while(i<10){

//     console.log(i)
// i++;
// }


// will run atleast one time
// do {
//     console.log(i)
//     i++;

// }while(i<10);


// Maps are objects but has unique key and values




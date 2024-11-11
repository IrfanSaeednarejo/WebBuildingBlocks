const arrays1=[0,2,3,4,5,6]
// console.log(arrays1[5])

// JavaScript arrays are resizable and can contain a mix of different data types.
const arrays2= new Array("irfan",4,6,78,"clear",'A')

const fruits = [];
fruits.push("banana", "apple", "peach",3);
console.log(fruits.length); // 4 elements in length
console.log(fruits); // 4 elements

fruits.pop() // remove the top last element from array stack
console.log(fruits.length); // 3 elements in length
console.log(fruits); // 3 elements

fruits[5]="pinaple" // added at index 5 where 3,4 is empty after poping
console.log(fruits.length); // 6 elements in length
console.log(fruits); // 4 elements print

console.log("A",fruits); 
const newfruits1= fruits.slice(1,3) // concept of slice only print the range-1 don't changed the original array.
console.log(newfruits1)
console.log("B",fruits)
const newfruits2= fruits.splice(1,3) // concept of splice to print the whole range and change the original array by deleting the range values.
console.log(newfruits2)
console.log("C",fruits)

 console.log(Array.from("IrfanSaeed"))// creates an array of a string as ['I','r','f'.....] etc
 let score1=100
 let score2=200
let score3=300
let name="kousarsaeed"

console.log(Array.of(score1,score2,score3,name)) // creates an array of declared elements (any datatype)


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
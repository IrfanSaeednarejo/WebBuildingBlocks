     // adding function in an object and getting executed
const obj={

    name:"Irfan Saeed",
    email: "irfan@google.com",
    location:"Sukkur",
    Userfunction: function user(){
        console.log(`The User name is, ${this.name} and live in ${this.location}`)
    }
}
obj.Userfunction()


//creating a simple function
console.log(addNumbers(4,5)); 

function addNumbers(num1,num2){
   return num1*num2
}
// another type of declaring function in a defined variable.
const userdefined= function(num1,num2){
    return num1/num2
}
console.log(userdefined(20,4)); 

// The arrow function
 const arrowfunction= (num1,num2) =>{
    return num1%num2
 }
 console.log(arrowfunction(7,2)); 

console.log("All Executed");



//imditately invoked function
// IIFE  normal named Function example
(function iifefunct(){
    const useridiol="Mark Zuckerberg"
    console.log(`the idiol of hamza is, ${useridiol}`);
})();


// IIFE  arrow/unamed Function example
((userfavcountry) => {
    console.log(`the favourite country of hamza is, ${userfavcountry}`);
})("newZealand");

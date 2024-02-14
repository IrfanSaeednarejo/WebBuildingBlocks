// objects literals
const obj1={
   name: "Irfan Saeed",
   age: 18,
   location:"Karachi",
   field: "Computer Science",
   email: "irfan@google.com",
   isLoggedIn: false
}

// console.log(obj1["email"])
// console.log(obj1["isLoggedIn"])
// obj1.email="irfan@maang.com"
// obj1["isLoggedIn"]=true
// console.log(obj1["email"])
// console.log(obj1["isLoggedIn"])

obj1.greeting= function(){
   console.log("Hello Js User")
}
obj1.greetingTwo= function(){
   console.log(`Hello Js User, ${this.name}`)
}
console.log(obj1.greeting())
console.log(obj1.greetingTwo())
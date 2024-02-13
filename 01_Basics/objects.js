// objects literals
const obj1={
   name: "Irfan Saeed",
   age: 18,
   location:"Karachi",
   field: "Computer Science",
   email: "irfan@google.com",
   isLoggedIn: false
}

console.log(obj1["email"])
console.log(obj1["isLoggedIn"])
obj1.email="irfan@maang.com"
obj1["isLoggedIn"]=true
console.log(obj1["email"])
console.log(obj1["isLoggedIn"])


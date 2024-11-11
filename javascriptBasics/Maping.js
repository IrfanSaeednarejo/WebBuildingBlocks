let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

//Iterate over an array using map() method


let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

  // Use map() method to iterate over an array of objects

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

//The callback would be invoked four times



const people = [
    {name: 'shawn', age: 21},
    {name: 'john', age: 23},
    {name: 'alex', age: 22},
    {name: 'nayomi', age: 21},
  ];
  
  const finalPeopleObject = people.reduce((peopleGroupedByAge, curValue) => {
    const age = curValue.age;
    if(!peopleGroupedByAge[age]) peopleGroupedByAge[age] = [];
    peopleGroupedByAge[age].push(curValue)
    return peopleGroupedByAge;
  }, {});
  
  console.log(finalPeopleObject);

  // Group objects with Javascript Reduce Array

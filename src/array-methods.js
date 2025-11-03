//Array of multiple objects, parameters etc.

const things = [
  //multiple objects in an array
  {
    name: "aamun",
    age: 30,
  },
  {
    name: "Alex",
    age: 25,
  },
  //num in an array
  50,
  "random",
  false,
  //another Array in the array
  [5, 7, false, "string"],
];

//Object with multiple objects or arrays inside with other parameters
const person = {
  name: "Jack",
  age: 50,
  isMarried: false,
  neighbour: {
    name: "john",
    age: 60,
  },
  children: [
    {
      name: "Emma",
      age: 4,
    },
    {
      name: "Mark",
      age: 6,
    },
  ],
};

//console.log(things.length);

//method to log the last parameter in the array
console.log(things[things.length - 1]);

//map, filter, reduce

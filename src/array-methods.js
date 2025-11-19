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
//console.log(things[things.length - 1]);

//map, filter, reduce

//map
const people = [
  {
    name: "Aamun",
    age: 30,
    occupation: "QA",
    hobbies: ["coding", "running", "gaming"],
  },
  {
    name: "John",
    age: 40,
    occupation: "Electrician",
    hobbies: ["woodwork", "gym", "football"],
  },
  {
    name: "James",
    age: 21,
    occupation: "Student",
    hobbies: ["rugby", "space", "youtube"],
  },
  {
    name: null,
    age: 21,
    occupation: "Student",
    hobbies: ["rugby", "space", "youtube"],
  },
];

//new variable "names", map method used on array above, function to return only names

const returnNames = (a) => a.name;
const names = people.map(returnNames);

const allHobbies = people.map((person) => person.hobbies);

const secondHobby = people.map((person) => person.hobbies[1]);

const returnHobby = (index) => people.map((person) => person.hobbies[index]);

//console.log(names);
//console.log(returnHobby(1));

//filter
const returnOver25 = (person) => person.age > 25;
const ageAbove25 = people.filter(returnOver25);

const areQA = people.filter((person) => person.occupation === "QA");

const filterByOccupation = (occupation) =>
  people.filter((person) => person.occupation === occupation);

const filterByName = (name) => people.filter((person) => person.name === name);

//console.log(areQA);

//console.log(filterByName("John"));

const numbers = [1, 2, 8, 4, 5];
const returnDoubles = (num) => num * 2;

const doubleNumbers = numbers.map(returnDoubles);
const cubedNumbers = numbers.map((num) => Math.pow(num, 3));
const powerOfNumber = (power) => numbers.map((num) => Math.pow(num, power));

//chain methods
//return 3,4,5. Map over them and double them. should return 6, 8, 10
const last3Nums = numbers.filter((num) => num >= 3).map(returnDoubles);

//console.log(last3Nums);

//console.log(powerOfNumber(3));

//reduce
// const sumOfNumbers = numbers.reduce((prev, current) => {
//   console.log(`previous value = ${prev}, current value = ${current}`);
//   console.log(`result = ${prev + current}`);
//   return prev + current;
// });

//console.log(sumOfNumbers);

const largestValue = numbers.reduce(
  (prev, current) => (current > prev ? current : prev),
  0
);

//console.log(largestValue);

const largestValueReal = Math.max(...numbers);

console.log(largestValueReal);

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
];

//new variable "names", map method used on array above, function to return only names
const names = people.map((person) => person.name);

const allHobbies = people.map((person) => person.hobbies);

const secondHobby = people.map((person) => person.hobbies[1]);

const returnHobby = (index) => people.map((person) => person.hobbies[index]);

//console.log(names);
//console.log(returnHobby(1));

//filter
const ageAbove25 = people.filter((person) => person.age > 25);

const areQA = people.filter((person) => person.occupation === "QA");

const filterByOccupation = (occupation) =>
  people.filter((person) => person.occupation === occupation);

const filterByName = (name) => people.filter((person) => person.name === name);

//console.log(areQA);

//console.log(filterByName("John"));

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => num * 2);
const cubedNumbers = numbers.map((num) => Math.pow(num, 3));
const powerOfNumber = (power) => numbers.map((num) => Math.pow(num, power));

console.log(powerOfNumber(3));

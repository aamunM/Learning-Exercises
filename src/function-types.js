// traditional function declaration

function greet(name) {
  //string interpolation
  return `hello ${name}`;
}

console.log("With String Interpolation: ");
const greetAamun = greet("Aamun");
console.log(greetAamun);

const greetAlex = greet("Alex");
console.log(greetAlex);

//arrow functions
const greetArrowFunction = (name) => {
  return `hello ${name}`;
};

console.log("\nWith Arrow Functions:");
console.log(greetArrowFunction("Aamun"));
console.log(greetArrowFunction("Alex"));

//arrow functions, anonymous functions and this

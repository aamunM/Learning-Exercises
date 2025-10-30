// implicit vs explicit return types

//explicit return
function explicitMultiply(a, b) {
  return a * b;
}

console.log(explicitMultiply(5, 10));

//explicit return
const explicitMultiply2 = (a, b) => {
  return a * b;
};

//implicit return
const implicitMultiply = (a, b) => a * b;

console.log(implicitMultiply(5, 10));

console.log(explicitMultiply2(5, 100));

const random = () => ({
  user: "aamun",
  age: "30",
});

console.log(random());

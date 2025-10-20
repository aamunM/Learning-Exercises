// for (var a = 1; a <= 5; a++) {
//   console.log("a: ", a);
// }

// console.log("a: ", a);

//global scope
const a = 1;
let b;

if (a === 1) {
  //block scope
  console.log("correct");
  b = 2;

  console.log("b :", b);
} else {
  //global scope
  console.log("incorrect");
}

console.log("outside if statement b:", b);

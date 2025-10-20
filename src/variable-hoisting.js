//what the compiler interprets
function test() {
  var myVar;

  console.log("unknown variable: ", a);

  a = "hello";

  console.log("unknown variable: ", a);
}

// - what i would write
function test2() {
  console.log("unknown variable: ", a);
  var a = "hello";
  console.log("unknown variable: ", a);
}

//Variable hoisting
console.log("random new: ", newVariable);
var newVariable = "Hello";

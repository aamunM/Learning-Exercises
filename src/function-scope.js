//global scope
let a = 0;
let b = 0;
let bWasSet = false;

function reassignA() {
  //function scope
  a = 5;
}

function reassignB() {
  //function scope
  if (b !== 10) {
    //block scope
    b = 10;
    if (bWasSet === false) {
      //block scope
      bWasSet = true;
    }
  }
}

reassignA();
reassignB();

console.log("a :", a);
console.log("b :", b);
console.log("bWasSet: ", bWasSet);
console.log("const ", random);

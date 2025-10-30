//declare new function
function returnFunc() {
  //returning a function
  return function func() {
    return "hello";
  };
}
//assign new variable to function we declared
const a = returnFunc();
const b = a();

function returnFunc2(word) {
  this.name = word;
  return function func2() {
    return function func3() {
      return this.name;
    };
  };
}

const c = returnFunc2("Alex");
const d = c();
const myName = d();

console.log(myName);

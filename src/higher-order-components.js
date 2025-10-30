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

//this example you will always be able to call the 'this.name' in the highest order function within all the child functions
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

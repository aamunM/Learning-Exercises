//global scope

// function is hoisted to the top so this function call works
test();

//note. if i put test2() here it would not work as it is not within the global/parent scope

function test() {
  //function scope
  // test2() is within the function scope
  test2();
  function test2() {
    console.log("random");
  }
  console.log("hello");
}
// the test() function is also hoisted to the top of the global scope
test();

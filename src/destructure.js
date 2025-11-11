//Random Object with key values, arrays and another object
const randomData = {
  id: 42,
  username: "skywalker",
  isActive: true,
  score: 87.5,
  tags: ["space", "jedi", "force"],
  profile: {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 28,
    email: "luke@galaxy.com",
  },
};

//in this function object destructuring is happening for the two parameters 'Score' and 'Is Active'. A new instance of the object is created with these two parameters changed. This can happen with an Array too
//the spread operator '...' creates a copy of all the properties in the object into a new instance of the object in the function.
function updateProps({ score, isActive }) {
  return {
    ...randomData,
    score: 0,
    isActive: !isActive,
  };
}
const myData = updateProps(randomData);

console.log(myData);

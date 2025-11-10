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

function updateProps({ score, isActive }) {
  return {
    ...randomData,
    score: 0,
    isActive: !isActive,
  };
}
const myData = updateProps(randomData);

console.log(myData);

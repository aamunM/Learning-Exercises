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

//template for Destructuring

const templatePerson = {
  name: "Missing name",
  age: 0,
  isEmployed: false,
};

const assignGenderToPerson = (gender) => ({
  ...templatePerson,
  gender,
});

const templateMale = assignGenderToPerson("male");
const templateFemale = assignGenderToPerson("female");
const templateOther = assignGenderToPerson("other");

function buildPerson(startingData, overwrites) {
  return {
    ...startingData,
    ...overwrites,
    hasBeenBuiltByFunciton: true,
  };
}

const aamun = buildPerson(templateMale, {
  name: "Aamun",
  age: 30,
  isEmployed: true,
  gender: "other",
});

const jack = buildPerson(templateFemale, {
  name: "jack",
  age: 3,
});

console.log(aamun);
console.log(jack);

// ----

function handleUnemployment() {
  return ["You are unemployed", "Find a new job"];
}

function returnPersonsEmployment({ isEmployed, name }) {
  return isEmployed
    ? `${name} is employed`
    : `${name} - ${handleUnemployment().join(" - ")}`;
}

function returnPersonsEmploymentt(personObj) {
  return personObj.isEmployed
    ? `${personObj.name} is employed`
    : `${personObj.name} - ${handleUnemployment().join(" - ")}`;
}

returnPersonsEmployment(jack);

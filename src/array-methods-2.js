// .some and .every

const numbers = [0, 2, 4, 6, 8, 10];

const hasOdd = numbers.some(
  (number) =>
    //number % 2 does not equal 0
    number % 2 !== 0
);

//console.log(hasOdd);

const allEven = numbers.every((number) => number % 2 === 0);

//console.log(allEven);

//.find and .findIndex

const users = [
  {
    id: 214,
    name: "aamun",
    active: true,
  },
  {
    id: 556,
    name: "Matt",
    active: false,
  },
  {
    id: 342,
    name: "John",
    active: false,
  },
];

const firstActive = users.find((user) => user.active === false);

//console.log(firstActive);

const firstActiveIndex = users.findIndex((user) => user.active === false);

//console.log(firstActiveIndex);

//console.log(users[firstActiveIndex]);

const formFields = [
  { name: "email", value: "user@example.com", required: true },
  { name: "age", value: "12", required: false },
  { name: "phone", value: "07427 487393", required: true },
];

// find the has all the form fields been filled in, return all the required ones true, is the value empty?

const formAllFilled = formFields.every(
  (field) => Boolean(field.value) === true
);
//console.log("are forms filled in? : " + formAllFilled);

const requiredForms = formFields.find((form) => form.required === true);
//console.log(requiredForms);

// all form fields are valid, is phone number in the correct format e.g. 07...., use .every and regex for email

const findEmail = formFields.find((email) => email.name === "email");
const findAge = formFields.find((age) => age.name === "age");
const findPhone = formFields.find((phone) => phone.name === "phone");

const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneFormat = /^07\d{3} \d{6}$/;
const isAgeOver13 = findAge.value >= 13;

const isValidEmail = emailFormat.test(findEmail.value);
const isValidPhone = phoneFormat.test(findPhone.value);
//console.log(isAgeOver13);

const arrayValidations = [isValidEmail, isValidPhone, isAgeOver13];
const isFormValid = arrayValidations.every((validation) => validation === true);

console.log(isFormValid);

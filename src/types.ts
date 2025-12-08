interface objectProps {
  name: string;
  age: number;
  // note ? means it is not a required field for the object, so i can be left blank
  isEmployed?: boolean;
}

//Primitive types
const typeBoolean: boolean = false;
const typeString: string = "name";
const typeNumber: number = 45;
//use typeof for the above to find out what it is

//to check for array, change type to [] and add primitive type before
const typeArrayString: string[] = ["name", "random"];
const typeArrayNumber: number[] = [43, 53];
const typeArrayBoolean: boolean[] = [false, true];
const typeArrayEmpty: [] = [];

//this checks wether the variable null === null
const typeNull: null = null;

//this is the check for object type
const typeObjectEmpty: {} = {};
//we can call objectProps from above to make this clearer in the file or from outside the file e.g. a config file
const typeObjectNotEmpty: objectProps = {
  name: "aamun",
  age: 30,
};

//note. in JS it harder to identify an object type as you need to do the following:
//const randomObject = {};

// typeof randomObject === "object";
// randomObject !== null;
// Array.isArray(randomObject)

// if(typeof randomObject === "object" && randomObject !== null && !Array.isArray(randomObject)){
//   console.log("yes");
// }

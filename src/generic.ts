// the arg parsed through must be a string type and returns a string type
function returnString(arg: string): string {
  return arg;
}
// the arg parsed through must be a number type and returns a number type
function returnNumber(arg: number): number {
  return arg;
}
// the arg parsed through must be the Arg type and returns the Arg type
function returnGeneric<Arg>(arg: Arg): Arg {
  return arg;
}

//this returns whatever the user parses through as the argument
returnGeneric("random");
returnGeneric(42);

//creates an interface that the APIResponse must have two types: 'Data' and 'HasError'
interface APIResponse<Data, HasError> {
  //creates these in the form of an object
  data: Data;
  hasError: HasError;
}

interface AddressProps<Country> {
  street: string;
  city: string;
  postcode: string;
  country: Country;
}

const response: APIResponse<
  {
    name: string;
    age: number;
    address: AddressProps<string>;
  },
  boolean
> = {
  //'Data' from the APIResponse is parsed through here as an object
  data: {
    name: "aamun",
    age: 30,
    address: {
      street: "Dale",
      city: "London",
      postcode: "ME1 3SP",
      country: "U.K.",
    },
  },
  //'HasError' has been parsed through as a boolean
  hasError: false,
};

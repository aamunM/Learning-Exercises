import { sayHelloProps } from "./typescript.types";

function sayHello(person: sayHelloProps) {
  return `Hello ${person}`;
}

let myname: string;
const myAge = 30;

console.log(sayHello(myname));

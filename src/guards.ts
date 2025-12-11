type funcProps = string | undefined | number;

// guarding is done here via the if statement
function returnWord(arg: funcProps) {
  //guards against the type being undefined
  if (typeof arg === "undefined") {
    return [];
  }
  //guards against the the type being a number
  if (typeof arg === "number") {
    return [arg];
  }
  //returns the type being a string if the above is not true
  return arg.split(" ");
}

returnWord("Hello World I Am Aamun");
//["Hello", "World", "I", "Am", "Aamun"]

const user = {
  name: "Aamun",
  hobbies: ["Coding", "Running", "Football"],

  //without arrow function, cannot scope 'this.name' as it is outside the scope
  showHobbies: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(`${this.name} likes ${hobby}`);
    });
  },

  //arrow function, can scope 'this.name' with an arrow function
  showHobbiesArrow: function () {
    this.hobbies.forEach((hobby) => console.log(`${this.name} likes ${hobby}`));
  },
};
//console.log(user.name);
//console.log(user.hobbies);
console.log(user.showHobbies());
console.log(user.showHobbiesArrow());

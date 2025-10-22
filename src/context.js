const user = {
  name: "Aamun",
  hobbies: ["Coding", "Running", "Football"],

  showHobbies: function () {
    this.name = "Alex";
    this.hobbies.forEach(function (hobby) {
      this.name = "Joe";
      console.log(`${this.name} likes ${hobby}`);
    });
  },

  showHobbiesArrow: function () {
    this.hobbies.forEach((hobby) => console.log(`${this.name} likes ${hobby}`));
  },
};
//console.log(user.name);
//console.log(user.hobbies);
//console.log(user.showHobbies());
console.log(user.showHobbiesArrow());

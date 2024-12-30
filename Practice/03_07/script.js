/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const favoriteCar = {
  make: "Toyota",
  model: "Camry",
  year: 2015,
  color: "Blue",
  engine: {
    type: "V6",
    horsepower: 200,
  },
  sportCar: false,
  milesPerGallon: 25,
  toggleSportsCar: function (carStatus) {
    this.sportCar = carStatus;
  },
};

console.log("This is my favorite car:", favoriteCar);
console.log("This is the color of the car:", favoriteCar.color);
console.log(
  "This is the engine type of the car:",
  favoriteCar["engine"]["type"]
);

//import Backpack from "./Backpack.js";
import Shoe from "./Shoe.js";

//myStyle is an object of the Shoe class
const myStyle = new Shoe(
  "Nike",
  "blue",
  9,
  "rubber",
  "leather",
  false,
  2003,
  250,
  2010
);

console.log("This is my old style", myStyle);
myStyle.showBrand("Adidas");
myStyle.showColor("orange");
console.log("This is my new style", myStyle);
console.log("This is the top material:", myStyle.material.top);
console.log("This is the new color:", myStyle.color);

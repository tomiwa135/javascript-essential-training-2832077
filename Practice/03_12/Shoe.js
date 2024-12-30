/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Shoe {
  constructor(
    //I define my parameters
    brand,
    color,
    size,
    materialBottom,
    materialTop,
    isWornOut,
    releaseDate,
    price,
    purchaseYear
  ) {
    //I define the properties for the class
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.material = {
      bottom: materialBottom,
      top: materialTop,
    };
    this.isWornOut = isWornOut;
    this.releaseDate = releaseDate;
    this.price = price;
    this.purchaseYear = purchaseYear;
  }
  //I define the methods for the class
  isShoeWornOut(getWornOutStatus) {
    this.isWornOut = getWornOutStatus;
  }
  showBrand(brandType) {
    this.brand = brandType;
    if (this.brand === "Nike") {
      console.log("Just do it!");
    }
  }
  showColor(colorType) {
    this.color = colorType;
  }
}

export default Shoe;

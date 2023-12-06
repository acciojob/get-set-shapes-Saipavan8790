//complete this code
class Rectangle {
	class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Animal {
	constructor(side) {
    // In a square, width and height are the same
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width; // Perimeter of a square: 4 * side
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

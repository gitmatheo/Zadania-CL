console.log("########### ZADANIE 1 #############");

var Car = function(type, hp, color) {
  this.type = type;
  this.hp = hp;
  this.color = color;
  this.km = 0;
  this.engineOn = false;
  this.service = [];
  if(arguments[3]) {
    this.km = arguments[3];
  }
}
Car.prototype.drive = function(km) {
  this.km+=km;
}

Car.prototype.printCarInfo = function() {
  console.log(this.type + " hp=" + this.hp + " " + this.color + " stan licznika " + this.km);
}

Car.prototype.turnOn = function() {
  this.engineOn=true;
}

var mercedes = new Car("Mercedes" , 200, 'green', 120000);
var fiat = new Car('fiat', 125, 'white');


mercedes.printCarInfo();
fiat.printCarInfo();

mercedes.drive(1200011);
fiat.drive(1232132132);

mercedes.printCarInfo();
fiat.printCarInfo();



console.log("########### ZADANIE 2 #############");

mercedes.service = ["11.11.2011", "11.11.2012", "11.11.2013", "11.11.2014"];

Car.prototype.addServiceDate = function(date) {
  this.service.push(date);
}

mercedes.addServiceDate("11.11.2015");
console.log(mercedes.service);

console.log("########### ZADANIE 4 #############");

var Rectangle = function(length2, width) {
  this.length2 = length2;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length2 * this.width
}

Rectangle.prototype.getPerimiter = function() {
  return 2 * this.length2 + 2 * this.width
}

var rec1 = new Rectangle(15, 10);
var rec2 = new Rectangle(4, 5);
var rec3 = new Rectangle(2, 2);

console.log(rec1.getArea());
console.log(rec2.getArea());
console.log(rec3.getArea());

console.log(rec1.getPerimiter());
console.log(rec2.getPerimiter());
console.log(rec3.getPerimiter());

console.log("########### ZADANIE 5 #############");

var Calculator = function() {
  this.arr = [];
}

Calculator.prototype.add = function(num1, num2) {
  var result = num1 + num2;
  console.log("added " + num1 + " to " + num2 + " got " + result);
  this.arr.push("added " + num1 + " to " + num2 + " got " + result);
}

Calculator.prototype.multiply = function(num1, num2) {
  var result = num1 * num2;
  console.log("multiplied " + num1 + " with " + num2 + " got " + result);
  this.arr.push("multiplied " + num1 + " with " + num2 + " got " + result);
}

Calculator.prototype.subtract = function(num1, num2) {
  var result = num1 - num2;
  console.log("subtracted " + num1 + " from " + num2 + " got " + result);
  this.arr.push("subtracted " + num1 + " from " + num2 + " got " + result);
}

Calculator.prototype.divide = function(num1, num2) {
  var result = num1 / num2;
  console.log("divided " + num1 + " by " + num2 + " got " + result);
  this.arr.push("subtracted " + num1 + " from " + num2 + " got " + result);
}

Calculator.prototype.printOperations = function() {
  console.log(this.arr);
}

Calculator.prototype.clearOperations = function() {
  this.arr = [];
}

var obj1 = new Calculator();


obj1.add(6,3);
obj1.multiply(6,3);
obj1.subtract(6,3);
obj1.divide(6,3);

obj1.printOperations();
obj1.clearOperations();

obj1.printOperations();

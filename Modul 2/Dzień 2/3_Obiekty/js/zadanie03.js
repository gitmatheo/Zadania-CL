console.log("########### ZADANIE 3 #############");

var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional == true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};


var robot1 = new Robot ("Matheo");
var robot2 = new Robot ("John");
var robot3 = new Robot ("Bill");

robot1.sayHi("John");
robot2.sayHi("You");
robot3.sayHi("Matheo");

robot1.changeName("John");
robot2.changeName("Han Solo");
robot3.changeName("Chewpacabra");

robot1.fixIt();
robot2.fixIt();
robot3.fixIt();

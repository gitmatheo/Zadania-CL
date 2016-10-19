console.log("####Zad 2####")

var max = 60;
var min = 1;

var array = [];
var roundedArray = [];

for (z = 0; z < 10; z++) {
  var randomNum = Math.floor(Math.random() * (max - min) + min);
  array.push(randomNum);
}

for (i = 0; i < array.length; i++) {
    var rounded = array[i];
    if ((array[i] % 2) == 0) {
      roundedArray.push(array[i]);
    } else {
      rounded = array[i] + 1;
      roundedArray.push(rounded);
    }
  }

console.log("Przykładowa tablica " + array + "\nZmodyfikowana tablica " +  roundedArray);

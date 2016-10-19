console.log("####Zad 3####")

var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];
var repeat = 0;
var arrRepeat = [];

for (var i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      repeat = arr2[j];
      console.log("Powtarza się - " + repeat);
      arrRepeat.push(repeat);
    }
  }
}

console.log(arrRepeat);

console.log("########Zadanie 1#########");

var fruits = ["Apple", "Orange", "Banana"];

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

for(var i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}




console.log("########Zadanie 3#########");

function printTable(array) {
  for(var i=0; i<array.length; i++) {
    console.log(array[i]);
  }
}

printTable(fruits);


console.log("########Zadanie 4#########");

var array1 = [1,2,3,4,5];

function add(array) {
  var sum = 0;
  for(var i=0; i<array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }


function multiply(array) {
  var multi = 1;
  for(var i=0; i<array.length; i++) {
    multi = multi * array[i];
  }
  return multi;
}


console.log(add(array1));
console.log(multiply(array1));


console.log("########Zadanie 5#########");


function getAvarage(arg) {
  var sum = 0;
  var avg = 0;
  for (i = 0; i < arg.length; i++) {
    sum = sum + arg[i];
    avg = sum / arg.length;
  }
  console.log(avg);
}

console.log(getAvarage(array1));


console.log("########Zadanie 6#########");

var array2 = [1,2,3,4,5];

function distFromAvarage(arr) {
  var arrOut = [];
  var sum = 0;
  var avg = 0;
    for (i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      avg = sum / arr.length;
    }
    // console.log("Average "+ avg);
    //
    for (i = 0; i < arr.length; i++) {
      arrOut.push(arr[i] - avg);
    }
  return arrOut;
}


console.log("Tablica wejściowa " + array2 + " Tablica wyjściowa " + distFromAvarage(array2));








console.log("########Zadanie 7#########");

function factors(n) {
  var emptyArray = [];
  var emptyArray2 = [];
  if (n > 0) {
    for (i = n; i > 0; i--) {
      if (n % i == 0) {
        emptyArray.push(i);
      }
    }
  } else {
    return emptyArray2;
  }
  return emptyArray;
}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

console.log("########Zadanie 8#########");
var arrayZad8 = [6,7,8,10,11,12,13,14,15];

function getMissingElement(n) {
  for (i = 0; i < n.length; i++) {
    if (n[i+1] - n[i] >= 2) {
      return n[i] + 1;
    } else {
      return null;
    }
  }
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));


console.log("########Zadanie 9#########");
var arrayZad9 = [145,11,3,64,4,6,10];

function sortArray(n) {
  return n.sort(function(a, b){return a-b})
}

console.log(sortArray(arrayZad9));

console.log("########Zadanie 10#########");

function addArrays(arr1, arr2) {
  var arrOut = [];
  if(arr1.length > arr2.length) {
    for(i = 0; i < arr1.length; i++) {
      if (arr2[i] == undefined) {
        arrOut.push(arr1[i]);
      } else {
        arrOut.push(arr1[i] + arr2[i]);
      }
    }
  } else if (arr1.length < arr2.length) {
    for(i = 0; i < arr2.length; i++) {
      if (arr1[i] == undefined) {
        arrOut.push(arr2[i]);
      } else {
        arrOut.push(arr1[i] + arr2[i]);
      }
    }
  } else {
    for(i = 0; i < arr1.length; i++) {
      arrOut.push(arr1[i] + arr2[i]);
    }
  }
  return arrOut;
}


console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));

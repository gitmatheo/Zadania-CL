
var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

console.log("####### ZADANIE 1 ########");

console.log(task1Array[3][2]);

console.log(task1Array[1].length);

console.log(task1Array[4][2]);


console.log("####### ZADANIE 2 ########");

for(i=0; i < task2Array.length; i++) {
  console.log(task2Array[i]);
}

for(i=0; i < task2Array.length; i++) {
  console.log(task2Array[i].length);
}

for(i=0; i < task2Array.length; i++) {
  for(j=0; j < task2Array[i].length; j++) {
    console.log(task2Array[i][j]);
  }
}

console.log("####### ZADANIE 3 ########");

function print2DArray(arr2D) {
  for(i=0; i < arr2D.length; i++) {
    for(j=0; j < arr2D[i].length; j++) {
      console.log(arr2D[i][j]);
    }
  }
}

console.log(print2DArray(task1Array));


console.log("####### ZADANIE 4 ########");

var arrayEx4 = [
          [2, false, 45],
          ["Ala", "Ola"],
          [true, false],
          [5, "Maciek", 7, 8],
          [12, 15, "Otatni string"]
        ];

console.log(print2DArray(arrayEx4));

console.log("####### ZADANIE 5 ########");

function create2DArray(rows, columns) {
  var array2D = [[]];
  for(var i=0; i < rows; i++) {
    array2D[i] = [];
    for(var j=0; j < columns; j++) {
      array2D[i][j] = j;
    }
  }
  return array2D;
}

console.log(create2DArray(4, 6));


console.log("####### ZADANIE 6 ########");

function funEx6() {
  var array2D = [[]];
  for(var i=0; i < 4; i++) {
    array2D[i] = [];
    for(var j=0; j < 4; j++) {
      if (i == j) {
        array2D[i][j] = 1;
      } else {
        array2D[i][j] = 0;
      }
    }
  }
  return array2D;
}

console.log(funEx6());

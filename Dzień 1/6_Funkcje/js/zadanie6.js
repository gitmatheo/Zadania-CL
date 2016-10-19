console.log("#### Zadanie 6 ####");

var array1 = [1,2,3,4,5,100];

function funkcjaZad6 (tablica1) {
  var sumaTablicy = 0;
  for (i=0; i<tablica1.length; i++) {
    sumaTablicy = sumaTablicy + tablica1[i];
  }
  return sumaTablicy;
};

console.log(funkcjaZad6(array1));

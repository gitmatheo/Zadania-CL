console.log("######Zadanie 2######");



function myFunction (a, n) {
  var pow = a;
  var result = "";
  for (i = 1; i < n; i++) {
    pow = pow * a;
  }
  console.log(pow);
}

myFunction(2, 4);

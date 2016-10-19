console.log("####Zadanie 5####");

function funkcjaZad5 (a,b,c) {
  var maxNum = '';
  if (a > b && a > c) {
    return "Największa z podanych liczb to " + a;
  } else if (b > a && b > c) {
    return "Największa z podanych liczb to " + b;
  } else if (c > b && c > a) {
    return "Największa z podanych liczb to " + c;
  } else {
    console.log("przynajmniej dwie liczby sa rowne");
  }
}


console.log(funkcjaZad5(3,2,3));


function numMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(numMax(3, 2, 3));

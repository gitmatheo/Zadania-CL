console.log("########Zadanie 1########");

var x = 5;

if(x == 0) {
    console.log("Liczba mniejsza od 0");
  }
  if(x < 0 ) {
    console.log("Liczba mniejsza od 0");
  }
  for(var i = x; --i; ) {
    x *= i;
  }
  console.log(x);

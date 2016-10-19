console.log("###### Zadanie 3 ######")

function myFunction2() {
  var arguments2 = Array.from(arguments);
  arguments2.forEach(function(value,key){
    console.log(value);
  })
  var max = 0;

  for(i=0; i < arguments.length; i++) {
    if (arguments[i] >= max) {
      max = arguments[i];
    }
  }
  console.log(max);
}

myFunction2(5, 29, 6, 4, 34, 56, 2, 3);



console.log("###### Zadanie 5 ######")

sayHi() // Wywolywanie funkcji dziala

function sayHi() {
  console.log("Czesc");
}

sayHi() // Wywolywanie funkcji dziala

sayHi2() // Konsola wyrzuca "sayHi2 is not a function" poniewaz wyrazenia funkcyjne nie sa przenoszone.
var sayHi2 = function() {
  console.log("Witaj");
}
sayHi2() // Wywolywanie funkcji dziala (jeśli usuniemy sayHi2 powyzej wyrazenia funkcyjnego)

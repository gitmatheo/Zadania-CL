console.log("#### Zadanie 10 ####");

var bDobra = "Bardzo dobra obsluga";
var dobra = "Dobra obsluga";
var srednia = "Srednia obsluga";
var zla = "Zla obsluga";

function calculateTip(amount, rating) {
  if (rating == bDobra) {
    console.log(bDobra + ". Kwota napiwku = " + amount * 0.25);
  } else if (rating == dobra) {
    console.log(dobra + ". Kwota napiwku = " + amount * 0.20);
  } else if (rating == srednia) {
    console.log(srednia + ". Kwota napiwku = " + amount * 0.15);
  } else if (rating == zla) {
      console.log(zla + ". Kwota napiwku = " + 0);
  } else {
    console.log("Opis nieczytelny");
  }
}

calculateTip(100, bDobra);

console.log("####Zad 1####")

var tablica = [1,2,3,4,5];
var suma = 0;
var srednia = 0;

for (i = 0; i < tablica.length; i++) {
  suma = suma + tablica[i];
  srednia = suma / tablica.length;
}
console.log(srednia);

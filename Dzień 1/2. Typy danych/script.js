console.log("###########Zadanie 1 ##############");

var num1 = 2; //number
var str1 = "2"; //string
var boo1 = true; //boolean
var spe1 = null; //object
var spe2 = undefined; //undefined
var spe3 = NaN; // number
var arr1 = [1,2]; // object
var obj1 = {
  nazwa: "Object1",
  wiek: 12
}; //object


console.log(typeof num1); //number
console.log(typeof str1); //string
console.log(typeof boo1); //boolean
console.log(typeof spe1); //object
console.log(typeof spe2); //undefined
console.log(typeof spe3); //number
console.log(typeof arr1); //object
console.log(typeof obj1); //object

console.log("********");
console.log(typeof (num1 + str1)); //string
console.log(typeof (str1 + boo1)); //string
console.log(typeof (boo1 + spe1)); //number
console.log(typeof (spe1 + spe2)); //number
console.log(typeof (spe2 + spe3)); //number
console.log(typeof (spe3 + spe1)); //number
console.log(typeof (arr1 + obj1)); //string
console.log(typeof (arr1 + num1)); //string
console.log(typeof (arr1 + str1)); //string

console.log("###########Zadanie 2 ##############");

var licz1 = 25;
var licz2 = 12;
console.log(licz1/licz2);
var result = licz1/licz2;

console.log(Math.floor(result));
console.log(Math.ceil(result));


console.log("###########Zadanie 3 ##############");


var max = 100;
var min = 5;

console.log(Math.random() * (max - min) + min);

console.log("###########Zadanie 4 ##############");
var widthBox = "23px";
var widthPanel = "2px";

//rozwiązanie bez parsowania
console.log(widthBox + widthPanel);
//rozwiązanie z parsowaniem
console.log(parseInt(widthBox) + parseInt(widthPanel));



console.log("###########Zadanie 5 ##############");

var mail = "matteuszd@mail.com";

console.log(mail.indexOf("@"));

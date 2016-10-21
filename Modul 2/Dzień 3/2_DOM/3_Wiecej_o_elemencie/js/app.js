/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
// ################ ZADANIE 1 ##################
console.log("################ ZADANIE 1 ##################");


var newLinks = document.querySelectorAll('.ex1 a');
var chrome = document.querySelectorAll('.ex1 .chrome');
var edge = document.querySelectorAll('.ex1 .edge');
var firefox = document.querySelectorAll('.ex1 .firefox');



  newLinks[0].setAttribute("href", "https://www.google.pl/chrome/browser/desktop/index.html");
  newLinks[0].innerHTML = document.querySelectorAll('.ex1 * h3')[0].innerHTML;
  chrome[0].style.width = "100px";
  edge[0].style.backgroundImage = "url('assets/img/edge.png')";
  firefox[0].style.backgroundImage = "url('assets/img/firefox.png')";



// ################ ZADANIE 2 ##################
console.log("################ ZADANIE 2 ##################");


var nameSpan = document.getElementById('name');
var colorSpan = document.getElementById('fav_color');
var favSpan = document.getElementById('fav_meal');

nameSpan.innerHTML = "Mateusz Dominiak";
colorSpan.innerHTML = "Niebieski";
favSpan.innerHTML = "Rosol";


// ################ ZADANIE 3 ##################
console.log("################ ZADANIE 3 ##################");


var exUl = document.querySelectorAll('.ex3 ul');
var exLi = document.querySelectorAll('.ex3 * li');
var exError = Array.from(document.querySelectorAll('.ex3 * .error'));



for (i=0; i < exUl.length; i++) {
  exUl[i].className = "menu";
}

for (i=0; i < exLi.length; i++) {
  exLi[i].classList.add("menuElement");
}


exError.forEach(function(domElement){
  console.log(domElement.remove("error"));
})




// ################ ZADANIE 4 ##################
console.log("################ ZADANIE 4 ##################");


var ex4Li = Array.from(document.querySelectorAll('.ex4 * li'));

// metoda z dataset
ex4Li.forEach(function(){
  for (i=0; i < ex4Li.length; i++) {
      ex4Li[i].dataset.id = i;
  }
})


// metoda z setAttribute
ex4Li.forEach(function(){
  for (i=0; i < ex4Li.length; i++) {
      ex4Li[i].setAttribute("data-id", i);
  }
})

// ################ ZADANIE 5 ##################
console.log("################ ZADANIE 5 ##################");

var ex5Li = Array.from(document.querySelectorAll('.ex5 * li:not([data-direction])'));
var ex5LiEven = Array.from(document.querySelectorAll('.ex5 * li:nth-child(even)'));
var ex5Li5 = Array.from(document.querySelectorAll('.ex5 * li:nth-child(5)'));
var ex5LiA = Array.from(document.querySelectorAll('.ex5 * li:nth-child(3n+3) a'));
var ex5Li3 = Array.from(document.querySelectorAll('.ex5 * li a'));


ex5Li.forEach(function(value){
  value.dataset.direction = "up";
})

ex5LiEven.forEach(function(value){
  value.style.backgroundColor = "green";
})

ex5Li5.forEach(function(value){
  value.className = "big";
})

ex5Li3.forEach(function(value){
  value.style.textDecoration = "none";
})

ex5LiA.forEach(function(value){
  value.style.textDecoration = "underline";
})



});

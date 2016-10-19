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
var chrome = document.querySelectorAll('.ex1 * .chrome');
var edge = document.querySelectorAll('.ex1 * .edge');
var firefox = document.querySelectorAll('.ex1 * .firefox');




for (i=0; i < newLinks.length; i++) {
  newLinks[i].setAttribute("href", "https://www.google.pl/chrome/browser/desktop/index.html");
  newLinks[i].innerHTML = document.querySelectorAll('.ex1 * h3')[i].innerHTML;
}

for (i=0; i < chrome.length; i++) {
 chrome[i].style.width = "100px";
}

for (i=0; i < edge.length; i++) {
  edge[i].style.backgroundImage = "url('../assets/img/edge.png')";
}
for (i=0; i < firefox.length; i++) {
  firefox[i].style.backgroundImage = "url('../assets/img/firefox.png')";
}


// ################ ZADANIE 2 ##################
console.log("################ ZADANIE 2 ##################");


var nameSpan = document.selectElementByOd('.ex2  span:first-child');
var colorSpan = document.querySelectorAll('.ex2 * span:nth-child(2)');
var favSpan = document.querySelectorAll('.ex2 * span:last-child');

nameSpan.innerHTML = 'Mateusz Dominiak';
colorSpan.innerHTML = 'Niebieski';
favSpan.innerHTML = 'Rosol';





















});

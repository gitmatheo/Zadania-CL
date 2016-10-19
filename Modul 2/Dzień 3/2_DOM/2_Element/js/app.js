/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
// ################ ZADANIE 1 ################
console.log("################ ZADANIE 1 ################");



console.log(homeElement);
console.log("Type : " + typeof homeElement);
console.log("ClassName:  " + homeElement.className);

for (i=0; i < childElements.length; i++) {
  console.log(childElements[i]);
  console.log("Type : " + typeof childElements[i]);
  console.log("ClassName:  " + childElements[i].className);
}


console.log(banner);
console.log("Type : " + typeof banner);
console.log("ClassName:  " + banner.className);



for (i=0; i < blocks.length; i++) {
  console.log(blocks[i]);
  console.log("Type : " + typeof blocks[i]);
  console.log("ClassName:  " + blocks[i].className);
}



for (i=0; i < links.length; i++) {
  console.log(links[i]);
  console.log("Type : " + typeof links[i]);
  console.log("ClassName:  " + links[i].className);
}



// ################ ZADANIE 2 ################
console.log("################ ZADANIE 2 ################");

for (i=0; i < blocks.length; i++) {
  console.log("Inner HTML: " + blocks[i].innerHTML);
  console.log("Outer HTML: " + blocks[i].outerHTML);
}

// "innerHTML" pokazuje zawartosc wewnątrz elementu zaznacznego.
// "outerHTML" pokazuje kod html wewnątrz elementu zaznacznego i wraz z elementem zaznaczanym
for (i=0; i < blocks.length; i++) {
  blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
}

// ################ ZADANIE 3 ################
console.log("################ ZADANIE 3 ################");

console.log(homeElement.id);

// ################ ZADANIE 4 ################
console.log("################ ZADANIE 4 ################");

for (i=0; i < childElements.length; i++) {
  console.log(childElements[i].tagName);
}

// ################ ZADANIE 5 ################
console.log("################ ZADANIE 5 ################");

for (i=0; i < links.length; i++) {
  console.log(links[i].dataset);
}


// ################ ZADANIE 6 ################
console.log("################ ZADANIE 6 ################");

console.log("ClassList:  " + banner.classList);
console.log("ClassName:  " + banner.className);

console.log(banner.classList);
console.log(banner.className);

// Dleczego powyzsze consol.logi wyswietlaja sie inaczej ?? Chodzi dokladnie o banner.classList



});

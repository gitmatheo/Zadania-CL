/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var menu = Array.from(document.getElementsByClassName("menu"));
 var button= Array.from(document.getElementsByClassName("button"));

  var counter = 1;
   button.forEach(function(value){
     value.addEventListener("click", function(){
       var newElement = document.createElement("li");
       newElement.innerHTML ="Liczba elementow w tablicy: " + counter + " :)";
       menu[0].appendChild(newElement)
       counter++;
     })
   })

 });

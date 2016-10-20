/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

var orders = document.getElementById("orders");
var deleteBtn = document.querySelectorAll(".deleteBtn");

console.log(orders);
console.log(deleteBtn);


 deleteBtn.addEventListener("click", function(event){
   event.parentElement.removeChild
   //zabezpieczenie aby nie wykonywala sie standardowa akcja, tj, otwarcie strony podanej w atrybucie href
   event.preventDefault();

 })
});

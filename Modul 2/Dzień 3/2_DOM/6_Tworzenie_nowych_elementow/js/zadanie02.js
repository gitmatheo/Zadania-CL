/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var addBtn = document.getElementById("addBtn");

 addBtn.addEventListener("click", function(event){

   //pobranie danych z inputow
   var orderId = document.getElementById("orderId").value;
   var item = document.getElementById("item").value;
   var quantity = document.getElementById("quantity").value;

   //przygotowanie nowego elementu tabeli  HTML
   var newTr = document.createElement("tr");

   //pierwsza kolumna
   var newTdOrder = document.createElement("td");
   newTdOrder.innerText = orderId;

   //druga kolumna
   var newTdItem = document.createElement("td");
   newTdItem.innerText = item;

   //trzecia kolumna
   var newTdQuantity = document.createElement("td");
   newTdQuantity.innerText = quantity;

   //wstawianie kolumn do wiersza
   newTr.appendChild(newTdOrder);
   newTr.appendChild(newTdItem);
   newTr.appendChild(newTdQuantity);

   //wstawienie do tabelki
   var table = document.querySelector("table#orders");
   table.appendChild(newTr);

   //zabezpieczenie aby nie wykonywala sie standardowa akcja, tj, otwarcie strony podanej w atrybucie href
   event.preventDefault();

 })

});

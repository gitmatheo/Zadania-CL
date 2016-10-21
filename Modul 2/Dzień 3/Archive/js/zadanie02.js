/**
 * Created by Jacek on 2016-01-12.
 */


 document.addEventListener("DOMContentLoaded", function () {

   var submitButton = document.querySelector('#addBtn');

   submitButton.addEventListener('click',function(event){

     //pobranie danych z inputów
     var orderNumber = document.querySelector('#orderId').value;
     var iteam = document.querySelector('#item').value;
     var quantity = document.querySelector('#quantity').value;

     //przygotowanie nowego elementu do tablicy w tabeli html
     var newTr = document.createElement('tr');
     //pierwsza kolumna
     var newTdOrder = document.createElement('td');
     newTdOrder.innerText = orderNumber;
     //druga kolumna
     var newTdIteam = document.createElement('td');
     newTdIteam.innerText = iteam;
     //pierwsza kolumna
     var newTdQuantity = document.createElement('td');
     newTdQuantity.innerText = quantity;

     //wstawienei kolumn do wiersza
     newTr.appendChild(newTdOrder);
     newTr.appendChild(newTdIteam);
     newTr.appendChild(newTdQuantity);

     //wstawianie do tabeli
     var table = document.querySelector('table#orders');
     table.appendChild(newTr);


     event.preventDefault();

   })
});

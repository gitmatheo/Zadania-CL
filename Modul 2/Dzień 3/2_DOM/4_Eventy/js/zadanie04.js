/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

 var btn1 = document.getElementById('button1');
 var btn2 = document.getElementById('button2');
 var btn3 = document.getElementById('button3');
 var span = document.querySelector('span');
console.log(span);

 var i = 1;

   btn1.addEventListener("click", function() {
     span.innerHTML = i++;
   });
   btn2.addEventListener("click", function() {
     span.innerHTML = i++;
   });
   btn3.addEventListener("click", function() {
     span.innerHTML = i++;
   });

 });

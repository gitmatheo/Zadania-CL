/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

 var btn1 = document.getElementById('button1');
 var btn2 = document.getElementById('button2');
 var btn3 = document.getElementById('button3');
 var btn1Span = btn1.nextElementSibling.querySelector('span');
 var btn2Span = btn2.nextElementSibling.querySelector('span');
 var btn3Span = btn3.nextElementSibling.querySelector('span');
console.log(btn1Span);

 var i = 0;
 var j = 0;
 var k = 0;

   btn1.addEventListener("click", function() {
     btn1Span.innerHTML = i++;
   });
   btn2.addEventListener("click", function() {
     btn2Span.innerHTML = j++;
   });
   btn3.addEventListener("click", function() {
     btn3Span.innerHTML = k++;
   });

 });

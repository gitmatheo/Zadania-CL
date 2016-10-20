/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

 var globalX = document.getElementById('globalX');
 var globalY = document.getElementById('globalY');
 var localX = document.getElementById('localX');
 var localY = document.getElementById('localY');
 var box = document.getElementById('box');


 box.addEventListener("mouseover", function(event) {
   console.log('mouseover');
   box.addEventListener("mousemove", function(event) {
       globalX.innerHTML = event.clientX;
       globalY.innerHTML = event.clientY;
       localX.innerHTML = event.screenX;
       localY.innerHTML = event.screenY;
   });
 })

});

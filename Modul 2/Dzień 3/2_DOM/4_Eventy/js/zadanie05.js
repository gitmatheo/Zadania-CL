/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

 var box1 = document.getElementById('box1');
 var box2 = document.getElementById('box2');
 var box3 = document.getElementById('box3');
 var box = Array.from(document.getElementsByClassName("box"));

 box.forEach(function(value){
     value.addEventListener("click", function() {
       var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
       value.style.backgroundColor = randomColor;
     });
 })

});

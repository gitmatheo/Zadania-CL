/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var button = Array.from(document.getElementsByClassName("button"));
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var button3 = document.getElementById("button3");
 var box = Array.from(document.getElementsByClassName("box"));
 var box1 = document.getElementById("box1");
 var box2 = document.getElementById("box2");
 var box3 = document.getElementById("box3");





 button.forEach(function(value){
    value.addEventListener("click", function() {
       var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentNode.style.backgroundColor = randomColor;
    });
 })






 });

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

console.log("lalallala");



button.forEach(function(value){
    value.addEventListener("click", function() {
        this.parentNode.removeChild(this.nextElementSibling);
    });
})







// button1.addEventListener("click", function () {
//   box1.parentNode.removeChild(box1);
// })
// button2.addEventListener("click", function () {
//   box2.parentNode.removeChild(box2);
// })
// button3.addEventListener("click", function () {
//   box3.parentNode.removeChild(box3);
// })





 });

/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

var remove = document.getElementById("remove");
var list = Array.from(document.getElementsByClassName("list"));
// var listChildren = list.children;

console.log(list);



     remove.addEventListener("click", function(){
       console.log(list.parentElement);
       list[0].parentElement.removeChild(list[0]);
     })

 });

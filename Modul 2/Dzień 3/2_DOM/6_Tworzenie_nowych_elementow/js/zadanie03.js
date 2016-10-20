/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var remove = document.getElementById("remove");

     remove.addEventListener("click", function(){
       remove.parentElement.removeChild(remove);
     })

 });

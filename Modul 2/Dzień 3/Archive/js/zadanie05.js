/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function () {

   var deleteBtn = Array.from(document.querySelectorAll('.deleteBtn'));

   deleteBtn.forEach(function(element){
   element.addEventListener('click',function(event){
     var toDeleteTr = this.parentElement.parentElement;
     toDeleteTr.parentNode.removeChild(toDeleteTr);
   })
   })
 });

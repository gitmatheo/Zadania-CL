/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener("DOMContentLoaded", function () {

var toDelete = document.querySelector('#remove');
console.log(toDelete);

  toDelete.addEventListener('click',function(event){
    toDelete.parentNode.removeChild(toDelete);
    });
   });

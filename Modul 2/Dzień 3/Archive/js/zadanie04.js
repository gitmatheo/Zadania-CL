/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {

var toDelete = document.querySelector('#remove');


  toDelete.addEventListener('click',function(event){
    var toDeleteLi = Array.from(document.querySelectorAll('li'));
      toDeleteLi.forEach(function(element){
      element.parentNode.removeChild(element);
      })
    });


});

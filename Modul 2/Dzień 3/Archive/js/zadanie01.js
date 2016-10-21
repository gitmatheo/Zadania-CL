/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener("DOMContentLoaded", function () {

var button = document.querySelector('.button');
var count = 0;


  button.addEventListener('click',function(event){
    var newLi = document.createElement('li');
    newLi.innerText = ('Element: '+count);
    count++;
    var takeUl = document.querySelector('.menu');
    takeUl.appendChild(newLi);
    event.preventDefault();

  });





 });

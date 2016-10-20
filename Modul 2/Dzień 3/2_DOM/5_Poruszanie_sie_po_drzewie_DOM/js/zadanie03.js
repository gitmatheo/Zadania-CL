/**
 * Created by Jacek on 2016-01-12.
 */

  document.addEventListener("DOMContentLoaded", function(){
  var listContainer = Array.from(document.getElementsByClassName("listContainer"));
  var list = Array.from(document.getElementsByClassName("list"));




    list.forEach(function(value){
       value.addEventListener("mouseover", function() {      
           this.firstElementChild.style.backgroundColor = "red";
           for(i=1; i < this.children.length; i++) {
             this.children[i].style.backgroundColor = "green";
           }
           this.lastElementChild.style.backgroundColor = "blue";
       });

       value.addEventListener("mouseout", function() {
           for(i=0; i < this.children.length; i++) {
             this.children[i].style.backgroundColor = "white";
           }

       });
    })
  });

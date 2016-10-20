/**
 * Created by Jacek on 2016-01-12.
 */

  document.addEventListener("DOMContentLoaded", function(){
  var first= Array.from(document.getElementsByClassName("first"));
  var id = document.getElementById("second");
  var dataEx = document.querySelector("[data-ex=third]");
  var forth = Array.from(document.getElementsByClassName("forth"));



  //pkt 1
  console.log("*************PKt 2*****************");
  first.forEach(function(value){
    console.log(value.children[0]);
    console.log(value.children[0].children[2]);
  });

  //pkt 2
  console.log("*************PKt 2*****************");
  console.log(id.parentElement);
  console.log(id.parentElement.children[3]);

  //pkt 3
  console.log("*************PKt 3*****************");
  console.log(dataEx.parentElement.parentElement);
  console.log(dataEx.parentElement.parentElement.lastElementChild);
  console.log(dataEx.parentElement.parentElement.lastElementChild.firstElementChild);
  console.log(dataEx.parentElement.parentElement.lastElementChild.firstElementChild.children[2]);


  //pkt 3
  forth.forEach(function(value){
    console.log("*************PKt 4*****************");
    console.log(value.parentElement);
    console.log(value.parentElement.querySelector("article"));
    console.log(value.parentElement.querySelector("article").children[3]);
     // ostatni przyklad z children[3]troche naokolo.
  });











  });

/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var pass1 = document.getElementById('pass1').value;
  var pass2 = document.getElementById('pass2').value;
  var agree = document.getElementById('agree').value;
  var btn = document.querySelector('.btn');

  console.log(email);
  console.log(name);
  console.log(name.length);
  console.log(agree);
btn.addEventListener("click", function(event){

  if(email.includes("@")){

  }
  if(name.length > 5){

  }
  if(surname.length > 5){

  }
  if(pass1 == pass2){

  }
  if(agree == on){

  }
event.preventDefault;
event.stopPropagation;
event.stopImmediatePropagation;

})





})

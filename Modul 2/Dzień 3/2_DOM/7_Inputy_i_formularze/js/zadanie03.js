/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var apple = document.querySelector("[alt=Apple]");
 var ubuntu = document.querySelector("[alt=Ubuntu]");
 var windows = document.querySelector("[alt=Windows]");
 var formControl = document.querySelector(".form-control");
 var btn = document.querySelector(".btn");

btn.addEventListener("click", function(event){
  var selected = document.querySelector(".form-control option:checked");

switch(selected.innerText){
  case 'Windows':
    windows.classList.remove("hidden");
    apple.classList.add("hidden");
    ubuntu.classList.add("hidden");
    break;
  case 'Os X':
    apple.classList.remove("hidden");
    ubuntu.classList.add("hidden");
    windows.classList.add("hidden");
    break;
  case 'Ubuntu':
    ubuntu.classList.remove("hidden");
    apple.classList.add("hidden");
    windows.classList.add("hidden");
    break;

}
  event.preventDefault();
})























// invoice.addEventListener("click", function(element){
//     if(this.checked) { //zaznaczony
//        element.checked=true;
//        checkbox[0].appendChild(clonedInvoiceData);
//     } else {
//       element.checked=false;
//       clonedInvoiceData.parentElement.removeChild(clonedInvoiceData);
//     }
//   })

 });

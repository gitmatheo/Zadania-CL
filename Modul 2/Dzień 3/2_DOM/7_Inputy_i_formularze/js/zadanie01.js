/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var invoice = document.getElementById("invoice");
 var invoiceData = document.getElementById("invoiceData");
 var checkbox = document.getElementsByClassName("checkbox");

 var clonedInvoiceData = invoiceData.cloneNode(true);


 invoiceData.parentElement.removeChild(invoiceData);

  invoice.addEventListener("click", function(element){
    if(this.checked) { //zaznaczony
       element.checked=true;
       checkbox[0].appendChild(clonedInvoiceData);
    } else {
      element.checked=false;
      clonedInvoiceData.parentElement.removeChild(clonedInvoiceData);
    }
  })

 });

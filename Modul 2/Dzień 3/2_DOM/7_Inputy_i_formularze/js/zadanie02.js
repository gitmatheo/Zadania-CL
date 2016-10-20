/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function(){


var selectAll = document.querySelector("form div.checkbox:first-of-type input");
var unselectAll = document.querySelector("form div.checkbox:last-of-type input");
var allInputs = Array.from(document.querySelectorAll("form div.checkbox input"));
var allPriceInputs = Array.from(document.querySelectorAll("form div.checkbox input[data-price]"));

//pobierz wartosci z inputow
// czy zostal zaznaczony checked


//*********************************************
// funkcja do wyliczenia ceny
  function calcPrice() {
    var allPriceInputsChecked = Array.from(document.querySelectorAll("form div.checkbox input[data-price]:checked"));
    var sum=0;
    allPriceInputsChecked.forEach(function(element){
      console.log(element.dataset.price);
      sum+=parseFloat(element.dataset.price);
    })
      console.log(sum);
      //wrzucamy
      document.querySelector('#price').innerText = sum;
      //zwrocenie wyniku aby mozna bylo z niego korzystac np przy zatwierdzaniu formularza ( patrz na koniec kodu)
      return sum;
  }

//*********************************************
//Zaznaczenie wszystkich z wyjatkiem ostaniego
  selectAll.addEventListener("click", function(){
    if(this.checked) { //zaznaczony
      allInputs.forEach(function(element){
        //preferowana metoda
        element.checked=true;
        // W ten sposob nie robic bo zadziala tylko raz
        // element.setAttribute("checked", true);
      });
      unselectAll.checked = false;
      calcPrice();
    }
  })

//*********************************************
//Odznaczenie wszystkich z wyjatkiem ostaniego
  unselectAll.addEventListener("click", function(){
    if(this.checked) { //zaznaczony
      allInputs.forEach(function(element){
        //preferowana metoda
        element.checked=false;
        // W ten sposob nie robic bo zadziala tylko raz
        // element.setAttribute("checked", true);
      });
      //odznaczenie ostatniego elementu
      this.checked = true;
      calcPrice();
    }
  })
  //*********************************************
  // dodatnie eventu do elementow z cenami
  allPriceInputs.forEach(function(element){
    element.addEventListener("change", function(event){
      calcPrice();
    })
  })
  //*********************************************
  // Zatwierdzenie formularza
  document.querySelector("form").addEventListener("submit", function(event){
    alert(calcPrice());

    //zabezpieczenie przed
    event.preventDefault;
  })


 })

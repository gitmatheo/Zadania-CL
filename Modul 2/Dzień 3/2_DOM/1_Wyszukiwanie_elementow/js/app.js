/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

///// ########ZADANIE 1############################################
     console.log(" ##### ZADANIE 1 #####")
     //pkt 1
     var byId = document.getElementById('home');
     var querySel = document.querySelector('#home');
     //pkt 2!
     var querySelAll = document.querySelectorAll('li:not([data-direction])');

    //  //pkt 3
     var byClass = document.getElementsByClassName('block');
     //
     console.log(byId);
     console.log(querySel);
     console.log(querySelAll);
     console.log(byClass);


///// ###############ZADANIE 2################################
     console.log(" ##### ZADANIE 2 #####");

     var navLi = document.querySelectorAll('nav li');
     var divP = document.querySelectorAll('div p');
     var articleDiv = document.querySelectorAll('article div');


     console.log(navLi);
     console.log(divP);
     console.log(articleDiv);

///// ##########ZADANIE 3###############################################

     console.log(" ##### ZADANIE 3 #####");

     var articleFirst = document.querySelectorAll('article.first');

    // wypisz w konsoli, ile elementów **h1** znajduje się w tym **tagu**.
    // NIE MA ZADNYCH
    console.log(" ######### wypisz w konsoli, ile elementów **h1** znajduje się w tym **tagu** ######### ")

    console.log(document.querySelectorAll('article.first h1').length);



    //  wyszukaj w nim wszystkie elementy o **klasie** ```oferts```, przeiteruj je i wypisz nazwy ich **tagów** w konsoli,
    console.log(" ######### wyszukaj w nim wszystkie elementy o **klasie** ```oferts```, przeiteruj je i wypisz nazwy ich **tagów** w konsoli, ######### ")

    var ofertsNum = document.querySelectorAll('article.first .oferts');
    for (i=0; i < ofertsNum.length; i++) {
      console.log(ofertsNum[i].tagName);
    }



    //  wyszukaj w nim wszystkie elementy **div**, przeiteruj je i wypisz nazwy ich klas w konsoli.

    console.log(" ######### wyszukaj w nim wszystkie elementy **div**, przeiteruj je i wypisz nazwy ich klas w konsoli. ######### ")
    var divClass = document.querySelectorAll('article.first div')

    divClass.forEach(function(value){
      console.log(value.className)
    })

    for (i=0; i < divClass.length; i++) {
      console.log(divClass[i].className);

    }

///// #######ZADANIE 4 - Ćwiczenie dodatkowe###########################
      console.log(" ##### ZADANIE 4 - Ćwiczenie dodatkowe #####");

      var navLi2= document.querySelectorAll('nav li:not([data-direction])');

      for (i=0; i < navLi2.length; i++) {
        navLi2[i].setAttribute("data-direction", "top");
        console.log(navLi2[i]);
      }

});

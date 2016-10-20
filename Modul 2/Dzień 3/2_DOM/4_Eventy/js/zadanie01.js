/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener("DOMContentLoaded", function(){

var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});

// 1. Po przeniesieniu scriptu do sekcji head Zmieniła się struktura pliku HTML poniewaz skrypt wykonal sie zanim jeszcze zostal wczytany plik HTML

// 2. Po utworzeniu eventu DOMContentLoaded. Skrypt JS wczytuje sie dopiero po zaladowaniu calego pliku HTML.

// 3. Tutaj nic sie nie zmienilo poniewaz skrypt wczytuje sie pierwszy dzieki umieszczeniu go na samym dole i rowniez za pomoca eventu DOMContentLoaded.

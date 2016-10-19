/**
 * Created by Agata on 21.01.2016.
 */

var id = setInterval(function() {
    console.log('jestem wywolywana co 2 sekundy');
}, 2000
)


console.log(id);




function myFunction(num) {
  if (num >= 1 && num <= 10) {
      var numberOfHello = 0;
    var hello = setInterval(function() {
      if(numberOfHello < num) {
          numberOfHello++;
          console.log('Hello');
      } else {
          clearInterval(hello);
      }
    }, 1000)
  }
}

myFunction(3);

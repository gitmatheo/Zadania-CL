console.log("######Zadanie 1######");

var zm1 = '';

function fooBar(x){

  for (var i=1; i <= x; i++){
      if (i%3 == 0) {
      zm1 = zm1 + "Foo";
      } else if (i%5 == 0) {
      zm1 = zm1 + "Bar";
      } else if (i%3==0 && i%5==0) {
      zm1 = zm1 + "FOOBAR";
      } else {
      zm1 = zm1 + i;
      }
    }
    return zm1;
}


console.log(fooBar(15));

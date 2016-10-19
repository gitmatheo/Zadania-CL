console.log("#######Zadanie 5#######");


var n = 5;
var lineOfStars2 = "";
for(var i = 0; i < n; i++) {
    lineOfStars2 = "";
    for(var j = 0; j < n; j++) {
        if ((i + j) % 2 !== 0) {
          lineOfStars2 = lineOfStars2 + "*";
    } else {
      lineOfStars2 = lineOfStars2 + " ";
    }
  }
    console.log(" ");
    console.log(lineOfStars2);
}

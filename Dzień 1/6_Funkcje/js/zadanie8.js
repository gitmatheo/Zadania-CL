console.log("#### Zadanie 8 ####");

function rentCost(days) {
  var numbersOfWeeks = Math.floor(days / 7);
  if (days == 1) {
    console.log("Koszt pokoju wyniesie 200 zł")
  } else if (days >= 2 && days <= 3) {
    days = days * 180;
    console.log("Koszt pokoju wyniesie " + days +"zł za cały pobyt. (180zł za dzień)");
  } else if (days >= 4 && days <= 7) {
    days = days * 160;
    console.log("Koszt pokoju wyniesie " + days +"zł za cały pobyt. (160zł za dzień)" );
  } else if (days >= 8 ) {
    days = days * 150;
    console.log("Koszt pokoju wyniesie " + days +"zł za cały pobyt. (150zł za dzień)" );
  } else {
    console.log("Wpisz wartość dodatnią wyzsza lub rowna 1");
  }

  if (numbersOfWeeks >= 1) {
    console.log("Dodatkowa znizka " + (50 * numbersOfWeeks) + " za " +  numbersOfWeeks + " pelnych tygodni");
  }
}


rentCost(21);

console.log("#### Zadanie 9 ####");

function rockPaperScissors(player1, player2) {
  if (player1 == "papier" && player2 == "nozyce") {
    console.log("Gracz 2 wygrał");
  } else if (player1 == "papier" && player2 == "kamien") {
    console.log("Gracz 1 wygrał");
  } else if (player1 == "kamien" && player2 == "nozyce") {
    console.log("Gracz 1 wygrał");
  } else if (player1 == "kamien" && player2 == "papier") {
    console.log("Gracz 2 wygrał");
  } else if (player1 == "nozyce" && player2 == "papier") {
    console.log("Gracz 1 wygrał");
  } else if (player1 == "nozyce" && player2 == "kamien") {
    console.log("Gracz 2 wygrał");
  } else if (player1 == player2) {
    console.log("Remis");
  } else {
    console.log("bledne informacje");
  }
}


rockPaperScissors("nozyce", "papier")

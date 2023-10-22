window.onload = () => {
  document.getElementById("randomCardButton");
  randomCardButton.addEventListener("click", randomCard);

  let suitSymbols = ["♥", "♠", "♣", "♦"];

  let deckNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
  ];

  function randomCard() {
    let getRandomDeckNumber =
      deckNumber[Math.floor(Math.random() * deckNumber.length)];
    let getRandomSuitNumber =
      suitSymbols[Math.floor(Math.random() * suitSymbols.length)];
    document.getElementById("topSuit").textContent = getRandomSuitNumber;
    document.getElementById("generatedNumber").textContent =
      getRandomDeckNumber;
    document.getElementById("bottomSuit").textContent = getRandomSuitNumber;
    let redHeart = document.querySelectorAll(".top-icon", ".bottom-icon");

    if (getRandomSuitNumber != "♥") {
      redHeart[0].style.color = "black";
      redHeart[1].style.color = "black";
    } else {
      redHeart[0].style.color = "red";
      redHeart[1].style.color = "red";
    }
  }

  window.onload = randomCard();
};

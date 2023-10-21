window.onLoad = () => {
  let suitSymbols = ["♠", "♣", "♥", "♦"];

  let deckNumber = [
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

/* let number = document.getElementsByClassName("top-icon", "bottom-icon") */
let getRandomDeckNumber = deckNumber[Math.floor(Math.random() * deckNumber.length)]


/* let suit = document.getElementsByClassName("generated-number") */
let getRandomSuitNumber = suitSymbols[Math.floor(Math.random() * suitSymbols.length)]

};

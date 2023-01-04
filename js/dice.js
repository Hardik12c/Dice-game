let playerscores = [0, 0];
let liveplayer = 0;
let redblock = '<div class="player-0-score-block-red"></div> ';
let gamover = false;

// declaring designvariables
let diceimg = document.querySelector(".dice"); //diceimg
let finalscoreplayer0 = document.getElementById("finalScore-0"); //first player final score
let finalscoreplayer1 = document.getElementById("finalScore-1"); //second player final score
let lightplayer0 = document.getElementById("live-0"); //greelight of player 0
let lightplayer1 = document.getElementById("live-1"); //greelight of player 1
let rolldicebtn = document.querySelector(".btn-roll-dice");  //rollthedice
let restartbtn = document.querySelector(".btn-reset"); //restart button

start();

// start the game
function start() {
  finalscoreplayer0.textContent = "0"; //setting player0 score to 0
  finalscoreplayer1.textContent = "0"; //setting player1 score to 0
  diceimg.style.display = "none"; //removing dice image in start
  lightplayer0.style.display = "none"; // removing light from player0 panel
  lightplayer1.style.display = "none"; // removing light from player1 panel
  document.getElementById(`player-0-score-block`).innerHTML = "";
  document.getElementById(`player-1-score-block`).innerHTML = "";
  playerscores = [0, 0];
  liveplayer = 0;
  gamover = false;
  document.querySelector(`.player-0-winner`).classList.add('invisible');
  document.querySelector(`.player-1-winner`).classList.add('invisible');
}


// restartbtn for restart the game
restartbtn.addEventListener("click", () => {
  start();
});


// gameover function
const gameover=()=>{
    gamover = true;
    document.querySelector(`.player-${1-liveplayer}-winner`).classList.remove('invisible');
}

// logic to display dice numbers
rolldicebtn.addEventListener("click", () => {
  if (!gamover) {
    let x = Math.floor(Math.random() * 6 + 1);

    diceimg.src = `./img/dice-${x}.png`;
    diceimg.style.display = "block"; //removing dice image in start

    // setting green light in players panel and setting up score board
    if (playerscores[0] < 20 && playerscores[1] < 20) {
      document.getElementById(`live-${liveplayer}`).style.display = "block";
      playerscores[liveplayer] += x;

      scoreblock();
      document.getElementById(`finalScore-${liveplayer}`).textContent =
        playerscores[liveplayer];

      liveplayer === 0 ? (liveplayer = 1) : (liveplayer = 0);

      document.getElementById(`live-${liveplayer}`).style.display = "none";
      if(playerscores[0]>=20 || playerscores[1]>=20){
        gameover();
      }
    } else {
        gamover();
    }
}
});


//scoreblock update

const scoreblock = () => {
    let size = playerscores[liveplayer];
  if (size > 20) size = 20;

  document.getElementById(`player-${liveplayer}-score-block`).innerHTML = "";
  for (let i = 0; i < size; i++) {
    document.getElementById(`player-${liveplayer}-score-block`).innerHTML +=
      redblock;
  }
};

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var jempol_div = document.getElementById("jem");
var telunjuk_div = document.getElementById("tel");
var kelingking_div = document.getElementById("kel");
var audioWin = new Audio("audio/goodjob.mp3");
var audioLose = new Audio("audio/ohno.mp3");
var audioDraw = new Audio("audio/draw.mp3");

/*Start Membuat function utama untuk game*/
function main() {
  jempol_div.addEventListener("click", function() {
    //   console.log("Kamu ngClick jempol");
    game("jem");
  });

  telunjuk_div.addEventListener("click", function() {
    //   console.log("Kamu ngClick Telunjuk");
    game("tel");
  });

  kelingking_div.addEventListener("click", function() {
    //   console.log("Kamu ngClick Kelingking");
    game("kel");
  });
}

// Panggil function Utama
main();
/* End Membuat function utama untuk game */

/* Start Membuat function pilihan Komputer diambil secara random*/
function getComputerChoice() {
  var choices = ["jem", "tel", "kel"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());
/* End Membuat function pilihan Komputer diambil secara random*/

/* Start Membuat function proses diadu data user dan computer */
function game(userChoice) {
  //   console.log("tes tes tes " + userChoice);
  var computerChoice = getComputerChoice();
  // console.log("Pilihan User >> " + userChoice);
  // console.log("Pilihan Komputer >> " + computerChoice);
  switch (userChoice + computerChoice) {
    case "jemtel":
    case "telkel":
    case "keljem":
      //   console.log("User Wins!!!");
      win(userChoice, computerChoice);
      break;
    case "teljem":
    case "keltel":
    case "jemkel":
      //   console.log("User Loses!!!");
      lose(userChoice, computerChoice);
      break;
    case "jemjem":
    case "teltel":
    case "kelkel":
      //   console.log("Drawwwww!!!");
      draw(userChoice, computerChoice);
      break;
  }
}
/* End Membuat function proses diadu data user dan computer */

/* Start Membuat fungsi konversi kata */
function convertToWord(letter) {
  if (letter === "jem") {
    return "Jempol";
  }
  if (letter === "tel") {
    return "Telunjuk";
  }
  return "Kelingking";
}
/* End Membuat fungsi konversi kata */

/* Start Membuat fungsi proses output */
function win(userChoice, computerChoice) {
  //   console.log("WIN");
  userScore++;
  //   console.log("Skor User " + userScore);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} lawan ${convertToWord(
    computerChoice
  )}. \<br> Good, Job!`;
  audioWin.play();
  scoreBoard_div.classList.add("green-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  //   console.log("LOSES");
  computerScore++;
  //   console.log("Skor Komputer " + computerScore);
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)} lawan ${convertToWord(
    computerChoice
  )}. \<br> Oh, No!`;
  audioLose.play();
  scoreBoard_div.classList.add("red-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  //   console.log("DRAWWW");
  result_p.innerHTML = `${convertToWord(userChoice)} lawan ${convertToWord(
    computerChoice
  )}. \<br> Drawww!`;
  audioDraw.play();
  scoreBoard_div.classList.add("grey-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("grey-glow");
  }, 500);
}
/* End Membuat fungsi proses output */

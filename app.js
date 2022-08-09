const p1 = {
  score: 0,
  button: document.querySelector("#p1"),
  display: document.querySelector("#score1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2"),
  display: document.querySelector("#score2"),
};

const btnReset = document.querySelector("#reset");
const sets = document.querySelector("#sets");

let playTo = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    player.display.innerText = player.score;
    if (player.score === playTo) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

sets.addEventListener("change", function (e) {
  playTo = parseInt(this.value);
  resetFunction();
});

const resetFunction = function () {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p1.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
};

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

btnReset.addEventListener("click", () => {
  resetFunction();
  sets.value = 3;
  playTo = parseInt(sets.value);
});

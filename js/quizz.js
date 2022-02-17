"use strict()";

let vraagNaam = document.getElementById("vraag");
let quizz = document.getElementById("quizz");
let submitButton = document.getElementById("submit");
let stats = document.getElementById("stats");
let goed = 0;
let fout = 0;
let quizVraag = 0;

const config = {
  type: "doughnut",
  data: data,
};

function submit() {
  submitButton.innerHTML = "Volgende";
  (vraagNaam.innerHTML = "Vraag"), quizVraag;
  console.warn("vraag", quizVraag);

  if (quizVraag == 1) {
    quizz.appendChild(q1);
  }
}
function check(antwrd, vrgnum) {
  if (antwrd == "G" && vrgnum == "1") {
  } else if (vrgnum == "1") {
    fout++;
  } else {
  }
}

let q1 = "<input type='radio' onclick='check('G', '1')'/>";

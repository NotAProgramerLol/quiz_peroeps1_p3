"use strict()";

let vraagNaam = document.getElementById("vraag");
let quizz = document.getElementById("quizz");
let submitButton = document.getElementById("submit");
let quizVraag = 0;

function submit() {
  quizVraag++;
  submitButton.innerHTML = "Volgende";
  vraagNaam.innerHTML = "Vraag", quizVraag;
  console.warn("vraag", quizVraag);

  if (quizVraag == 1) {
  }
}

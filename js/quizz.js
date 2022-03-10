"use strict()";

let goed;
let fout;
let huidigeVraag = 1;

let quizbox = document.getElementById("quizz");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");

let vraag01 = ["ant1", "ant2", "ant3", "ant4"];
let vraag02 = ["ant1", "ant2", "ant3", "ant4"];
let vraag03 = ["ant1", "ant2", "ant3", "ant4"];
let vraag04 = ["ant1", "ant2", "ant3", "ant4"];
let vraag05 = ["ant1", "ant2", "ant3", "ant4"];
let vraag06 = ["ant1", "ant2", "ant3", "ant4"];
let vraag07 = ["ant1", "ant2", "ant3", "ant4"];
let vraag08 = ["ant1", "ant2", "ant3", "ant4"];
let vraag09 = ["ant1", "ant2", "ant3", "ant4"];
let vraag10 = ["ant1", "ant2", "ant3", "ant4"];

switch (huidigeVraag) {
  case 1:
    q1.innerHTML = vraag01[0];
    q1.value = true;
    q2.innerHTML = vraag01[1];
    q3.innerHTML = vraag01[2];
    q4.innerHTML = vraag01[3];
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
  case 10:
    break;

  default:
    break;
}

"use strict()";

let goed = 0;
let fout = 0;
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
    //
    q2.innerHTML = vraag01[1];
    q2.value = true;
    //
    q3.innerHTML = vraag01[2];
    q3.value = true;
    //
    q4.innerHTML = vraag01[3];
    q4.value = true;
    break;
  case 2:
    q1.innerHTML = vraag02[0];
    q1.value = true;
    //
    q2.innerHTML = vraag02[1];
    q2.value = true;
    //
    q3.innerHTML = vraag02[2];
    q3.value = true;
    //
    q4.innerHTML = vraag02[3];
    q4.value = true;
    break;
  case 3:
    q1.innerHTML = vraag03[0];
    q1.value = true;
    //
    q2.innerHTML = vraag03[1];
    q2.value = true;
    //
    q3.innerHTML = vraag03[2];
    q3.value = true;
    //
    q4.innerHTML = vraag03[3];
    q4.value = true;
    break;
  case 4:
    q1.innerHTML = vraag04[0];
    q1.value = true;
    //
    q2.innerHTML = vraag04[1];
    q2.value = true;
    //
    q3.innerHTML = vraag04[2];
    q3.value = true;
    //
    q4.innerHTML = vraag04[3];
    q4.value = true;
    break;
  case 5:
    q1.innerHTML = vraag05[0];
    q1.value = true;
    //
    q2.innerHTML = vraag05[1];
    q2.value = true;
    //
    q3.innerHTML = vraag05[2];
    q3.value = true;
    //
    q4.innerHTML = vraag05[3];
    q4.value = true;
    break;
  case 6:
    q1.innerHTML = vraag06[0];
    q1.value = true;
    //
    q2.innerHTML = vraag06[1];
    q2.value = true;
    //
    q3.innerHTML = vraag06[2];
    q3.value = true;
    //
    q4.innerHTML = vraag06[3];
    q4.value = true;
    break;
  case 7:
    q1.innerHTML = vraag07[0];
    q1.value = true;
    //
    q2.innerHTML = vraag07[1];
    q2.value = true;
    //
    q3.innerHTML = vraag07[2];
    q3.value = true;
    //
    q4.innerHTML = vraag07[3];
    q4.value = true;
    break;
  case 8:
    q1.innerHTML = vraag08[0];
    q1.value = true;
    //
    q2.innerHTML = vraag08[1];
    q2.value = true;
    //
    q3.innerHTML = vraag08[2];
    q3.value = true;
    //
    q4.innerHTML = vraag08[3];
    q4.value = true;
    break;
  case 9:
    q1.innerHTML = vraag09[0];
    q1.value = true;
    //
    q2.innerHTML = vraag09[1];
    q2.value = true;
    //
    q3.innerHTML = vraag09[2];
    q3.value = true;
    //
    q4.innerHTML = vraag09[3];
    q4.value = true;
    break;
  case 10:
    q1.innerHTML = vraag10[0];
    q1.value = true;
    //
    q2.innerHTML = vraag10[1];
    q2.value = true;
    //
    q3.innerHTML = vraag10[2];
    q3.value = true;
    //
    q4.innerHTML = vraag10[3];
    q4.value = true;
    break;

  default:
    console.warn("niet iets tussen {0} en {1}", 1, 10);
    break;
}
function check(qNummer) {
  if (qNummer == 1 && q1.value == true) {
    goed++;
  } else if (qNummer == 1 && q1.value == false) {
    fout++;
  } else {
    console.error("u fucked up");
  }
}

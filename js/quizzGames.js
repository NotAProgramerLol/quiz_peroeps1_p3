"use strict()";

//quizz vars
let goed = 0;
let fout = 0;
let vraag = document.getElementById("vraag");
let huidigeVraag = 1;

let quizbox = document.getElementById("quizz");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");

let vraag01 = [
  "Minecraft<br />Wat gebeurt er als je een bed plaats in the nether",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag02 = [
  "GTA V<br />Waneer is de game uitgekomen",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag03 = [
  "Roblox<br />Wat is de in-game geld",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag04 = [
  "Valorant<br />Welke map is het nieuwst?",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag05 = [
  "The sims<br />Wat is hallo in Simlish",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag06 = [
  "Osu<br />Wat moet je doen in het spel?",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag07 = [
  "Destiny 2<br />Waar gaat de nieuwe DLC (The witch queen) over?",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag08 = [
  "Leauge of legends<br />Wat is de naam van de serie van deze game",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag09 = [
  "Fortnite<br />Hoeveel seasons heeft het spel in totaal gehad ( januari 2022 )",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];
let vraag10 = [
  "Rainbow six siege<br />Hoeveel hackers zijn er in deze game",
  "ant1",
  "ant2",
  "ant3",
  "ant4",
];

function switchVraag() {
  switch (huidigeVraag) {
    case 1:
      vraag.innerHTML = vraag01[0];
      //
      q1.innerHTML = vraag01[1];
      q1.value = false;
      //
      q2.innerHTML = vraag01[2];
      q2.value = false;
      //
      q3.innerHTML = vraag01[3];
      q3.value = false;
      //
      q4.innerHTML = vraag01[4];
      q4.value = false;
      break;
    case 2:
      vraag.innerHTML = vraag02[0];
      //
      q1.innerHTML = vraag02[1];
      q1.value = false;
      //
      q2.innerHTML = vraag02[2];
      q2.value = false;
      //
      q3.innerHTML = vraag02[3];
      q3.value = false;
      //
      q4.innerHTML = vraag02[4];
      q4.value = false;
      break;
    case 3:
      vraag.innerHTML = vraag03[0];
      //
      q1.innerHTML = vraag03[1];
      q1.value = false;
      //
      q2.innerHTML = vraag03[2];
      q2.value = false;
      //
      q3.innerHTML = vraag03[3];
      q3.value = false;
      //
      q4.innerHTML = vraag03[4];
      q4.value = false;
      break;
    case 4:
      vraag.innerHTML = vraag04[0];
      //
      q1.innerHTML = vraag04[1];
      q1.value = false;
      //
      q2.innerHTML = vraag04[2];
      q2.value = false;
      //
      q3.innerHTML = vraag04[2];
      q3.value = false;
      //
      q4.innerHTML = vraag04[3];
      q4.value = false;
      break;
    case 5:
      vraag.innerHTML = vraag05[0];
      //
      q1.innerHTML = vraag05[1];
      q1.value = false;
      //
      q2.innerHTML = vraag05[2];
      q2.value = false;
      //
      q3.innerHTML = vraag05[3];
      q3.value = false;
      //
      q4.innerHTML = vraag05[4];
      q4.value = false;
      break;
    case 6:
      vraag.innerHTML = vraag06[0];
      //
      q1.innerHTML = vraag06[1];
      q1.value = false;
      //
      q2.innerHTML = vraag06[2];
      q2.value = false;
      //
      q3.innerHTML = vraag06[3];
      q3.value = false;
      //
      q4.innerHTML = vraag06[4];
      q4.value = false;
      break;
    case 7:
      vraag.innerHTML = vraag07[0];
      //
      q1.innerHTML = vraag07[1];
      q1.value = false;
      //
      q2.innerHTML = vraag07[2];
      q2.value = false;
      //
      q3.innerHTML = vraag07[3];
      q3.value = false;
      //
      q4.innerHTML = vraag07[4];
      q4.value = false;
      break;
    case 8:
      vraag.innerHTML = vraag08[0];
      //
      q1.innerHTML = vraag08[1];
      q1.value = false;
      //
      q2.innerHTML = vraag08[2];
      q2.value = false;
      //
      q3.innerHTML = vraag08[3];
      q3.value = false;
      //
      q4.innerHTML = vraag08[4];
      q4.value = false;
      break;
    case 9:
      vraag.innerHTML = vraag09[0];
      //
      q1.innerHTML = vraag09[1];
      q1.value = false;
      //
      q2.innerHTML = vraag09[2];
      q2.value = false;
      //
      q3.innerHTML = vraag09[3];
      q3.value = false;
      //
      q4.innerHTML = vraag09[4];
      q4.value = false;
      break;
    case 10:
      vraag.innerHTML = vraag10[0];
      //
      q1.innerHTML = vraag10[1];
      q1.value = false;
      //
      q2.innerHTML = vraag10[2];
      q2.value = false;
      //
      q3.innerHTML = vraag10[3];
      q3.value = false;
      //
      q4.innerHTML = vraag10[4];
      q4.value = false;
      break;

    default:
      q1.remove();
      q2.remove();
      q3.remove();
      q4.remove();
      vraag.innerHTML = "klaar met de game quiz";

      break;
  }
  document.getElementById("goed").innerHTML = goed + " goed";
  document.getElementById("fout").innerHTML = fout + " fout";
  console.log(huidigeVraag, q1.value, q2.value, q3.value, q4.value);
}
function check(qNummer) {
  // 1
  if (qNummer.target.id == "q1" && q1.value == "true") {
    goed++;
    huidigeVraag++;
  } else if (qNummer.target.id == "q1" && q1.value == "false") {
    fout++;
    huidigeVraag++;
  }
  // 2
  if (qNummer.target.id == "q2" && q2.value == "true") {
    goed++;
    huidigeVraag++;
  } else if (qNummer.target.id == "q2" && q2.value == "false") {
    fout++;
    huidigeVraag++;
  }
  // 3
  if (qNummer.target.id == "q3" && q3.value == "true") {
    goed++;
    huidigeVraag++;
  } else if (qNummer.target.id == "q3" && q3.value == "false") {
    fout++;
    huidigeVraag++;
  }
  // 4
  if (qNummer.target.id == "q4" && q4.value == "true") {
    goed++;
    huidigeVraag++;
  } else if (qNummer.target.id == "q4" && q4.value == "false") {
    fout++;
    huidigeVraag++;
  }
  switchVraag();
}
q1.addEventListener("click", check);
q2.addEventListener("click", check);
q3.addEventListener("click", check);
q4.addEventListener("click", check);
switchVraag();

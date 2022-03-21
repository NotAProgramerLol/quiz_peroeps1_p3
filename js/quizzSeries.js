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
  "Rick and Morty<br />Welk seizoen werden draken gezien als hoeren ",
  "1",
  "4",
  "5",
  "3",
];
let vraag02 = [
  "South park<br />Welk bedrijf begon randy in de laatste paar seizoenen",
  "Randy’s weed farm",
  "Randy’s car shop",
  "Randy’s hair salon",
  "Randy’s hasj farm",
];
let vraag03 = [
  "Spongebob<br />Welk karakter heeft een neus die op een penis lijkt",
  "Sandy",
  "Octo",
  "Krabs",
  "Peter griffin",
];
let vraag04 = [
  "Avatar<br />Hoe heet de hoofdpersoon van Aavatar",
  "Aang",
  "Jan",
  "Henk",
  "Gerda",
];
let vraag05 = [
  "Disjointed<br />Wat groeien ze in hun bedrijf",
  "Hasj",
  "Medicinale wiet",
  "Xtc",
  "LSD",
];
let vraag06 = [
  "Archer<br />Wie raakt er in een coma",
  "Archer",
  "Lana",
  "Cyrel",
  "Henk",
];
let vraag07 = [
  "Netflix<br />Wat is de meest gekeken serie op netflix (januari 2022)",
  "Rick and mort",
  "Stranger things",
  "The witcher",
  "Brooklyn nine-nine",
];
let vraag08 = [
  "Brooklyn nine-nine<br />Jake peralta heft iets met  …",
  "Gina",
  "Charles",
  "Amy",
  "Holt",
];
let vraag09 = [
  "After-life<br />Waar gaat de serie over",
  "Depressie",
  "Psygische aandoening",
  "LGBTQ",
  "Happiness",
];
let vraag10 = [
  "Outer banks<br />Wat is het doel in seizoen 1",
  "Ze gaan diamonds stelen",
  "Ze gaan goud stelen",
  "Ze gaan geld stelen",
  "Ze stelen niks",
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
      q2.value = true;
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
      q1.value = true;
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
      q2.value = true;
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
      q1.value = true;
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
      q2.value = true;
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
      q1.value = true;
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
      q2.value = true;
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
      q3.value = true;
      //
      q4.innerHTML = vraag08[4];
      q4.value = false;
      break;
    case 9:
      vraag.innerHTML = vraag09[0];
      //
      q1.innerHTML = vraag09[1];
      q1.value = true;
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
      q2.value = true;
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

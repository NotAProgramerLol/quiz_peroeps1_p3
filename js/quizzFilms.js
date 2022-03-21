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
  "Avatar<br />Welke taal praat een Avatar? ",
  "Navi",
  "Novi",
  "Nevi",
  "Nogi",
];
let vraag02 = [
  "Harry potter deathly hallows 1<br />Wie gaat er dood aan t einde van de film",
  "Harry",
  "Dobby",
  "Dumbledore",
  "Ron",
];
let vraag03 = [
  "Hunger games<br />Hoe jaagd ze haar vijanden weg als ze in de boom zit",
  "Met bijen",
  "Pijl en boog",
  "Schreeuwen",
  "Dood maken",
];
let vraag04 = [
  "John wick<br />Waarom wilt john wick iemand vermoorden",
  "Omdat hij geld schuldig is",
  "Omdat zijn hond vermoord is",
  "Hij vind het leuk",
  "Hij wilt geld",
];
let vraag05 = [
  "Lord of the rings<br />Hoe heet de hoofdpersoon",
  "Frodo",
  "Jodo",
  "Vrodo",
  "Henk",
];
let vraag06 = [
  "Baby driver<br />Wat moet de hoofdpersoon doen",
  "Thee brengen",
  "Banken overvallen",
  "Rijden",
  "Koffie drinken",
];
let vraag07 = [
  "Pitch perfect<br />Aan het begin van de film gebeurt er iets “ergs” maar wat is dat",
  "Ze valt",
  "Ze kotst",
  "Ze krijgt een hartaanval",
  "Haar broek valt uit",
];
let vraag08 = [
  "Avengers<br />Wie gaat er dood in avangers endgame",
  "Hulk",
  "Captain america",
  "Iron man",
  "Hawkeye",
];
let vraag09 = [
  "Back to the future<br />Wat is er gebeurt met de stadsklok",
  "Er is bliksem op gekomen",
  "Hij is ingestort",
  "De klok is al 8 jaar kapot",
  "Er is niks mee gebeurt",
];
let vraag10 = [
  "Verschikkelijke ikke<br />Hoe heten de slaafjes van de hoofdpersoon",
  "Minions",
  "Ninions",
  "Binions",
  "Kinions",
];

function switchVraag() {
  switch (huidigeVraag) {
    case 1:
      vraag.innerHTML = vraag01[0];
      //
      q1.innerHTML = vraag01[1];
      q1.value = true;
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
      q2.value = true;
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
      q1.value = true;
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
      q2.value = true;
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
      q1.value = true;
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
      q3.value = true;
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
      q1.value = true;
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

"use strict()";

let vraagNaam = document.getElementById("vraag");
let quizz = document.getElementById("quizz");
let submitButton = document.getElementById("submit");
let stats = document.getElementById("stats");
let goed = 0;
let fout = 0;
let quizVraag = 0;

// let checkvraagCount = 0;
// begin vragen
const q1 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";
const q2 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q3 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q4 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q5 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q6 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q7 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q8 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q9 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

const q10 =
  "<input type='radio' id='q' name='q' value='f' /> F <br />" +
  "<input type='radio' id='q' name='q' value='g' /> G <br />" +
  "<input type='radio' id='q' name='q' value='f' /> F";

// eind vragen

// const config = {
//   type: "doughnut",
//   data: data,
// };

function submit() {
  if (quizVraag == 0) {
    submitButton.innerHTML = "Volgende";
    quizVraag = 1;
  }

  if (quizVraag == 1) {
    quizz.innerHTML = q1;
  } else if (quizVraag == 2) {
    quizz.innerHTML = q2;
  } else if (quizVraag == 3) {
    quizz.innerHTML = q3;
  } else if (quizVraag == 4) {
    quizz.innerHTML = q4;
  } else if (quizVraag == 5) {
    quizz.innerHTML = q5;
  } else if (quizVraag == 6) {
    quizz.innerHTML = q6;
  } else if (quizVraag == 7) {
    quizz.innerHTML = q7;
  } else if (quizVraag == 8) {
    quizz.innerHTML = q8;
  } else if (quizVraag == 9) {
    quizz.innerHTML = q9;
  } else if (quizVraag == 10) {
    quizz.innerHTML = q10;
  } else {
    console.error("tf u doing");
  }
  vraagNaam.innerHTML = "<p>Vraag</p>" + quizVraag;
  console.warn("vraag", quizVraag);
}

// validatie
if (document.getElementById("q").addEventListener("click", check)) {
  console.error("sda");
}
function check(antwrd, vrgnum) {
  document.getElementById('q').
  if (antwrd == "G" && (vrgnum == quizVraag)) {
    goed++;

  } else if (antwrd == "F" && vrgnum == quizVraag) {
    fout++;

  } else {
    console.error("u fucked up lol");
  }
  console.log("G:" + goed + " | F:" + fout);
}

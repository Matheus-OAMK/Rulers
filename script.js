"use strict";

const dariusCard = document.querySelector(".darius");
const garenCard = document.querySelector(".garen");
const dianaCard = document.querySelector(".diana");
const katarinaCard = document.querySelector(".katarina");
const tyrandemereCard = document.querySelector(".tyrandemere");
const eliseCard = document.querySelector(".elise");
const jaximusCard = document.querySelector(".jaximus");

dariusCard.classList.add("ps-1");
garenCard.classList.add("ps-2");
dianaCard.classList.add("ps-3");
katarinaCard.classList.add("ps-4");
tyrandemereCard.classList.add("ps-5");
eliseCard.classList.add("ps-6");
jaximusCard.classList.add("ps-7");

var i = 1;
var counter = 1;
const p1 = 1;
const p2 = 2;
const p3 = 3;
const p4 = 4;
const p5 = 5;
const p6 = 6;
const p7 = 7;

function myLoop() {
  //  create a loop function
  setTimeout(function () {
    //  call a 5s setTimeout when the loop is called

    if (counter == 1) {
      // Reemove previous class for step 1

      katarinaCard.classList.remove(`ps-${p4}`);
      dariusCard.classList.remove(`ps-${p1}`);
      garenCard.classList.remove(`ps-${p2}`);
      eliseCard.classList.remove(`ps-${p6}`);
      jaximusCard.classList.remove(`ps-${p7}`);
      tyrandemereCard.classList.remove(`ps-${p5}`);
      dianaCard.classList.remove(`ps-${p3}`);

      // Add new class for step 1

      katarinaCard.classList.add(`ps-${p5}`);
      jaximusCard.classList.add(`ps-${p1}`);
      dariusCard.classList.add(`ps-${p2}`);
      garenCard.classList.add(`ps-${p3}`);
      eliseCard.classList.add(`ps-${p7}`);
      tyrandemereCard.classList.add(`ps-${p6}`);
      dianaCard.classList.add(`ps-${p4}`);

      counter++;
    } else if (counter == 2) {
      // Reemove previous class for step 2

      katarinaCard.classList.remove(`ps-${p5}`);
      jaximusCard.classList.remove(`ps-${p1}`);
      dariusCard.classList.remove(`ps-${p2}`);
      garenCard.classList.remove(`ps-${p3}`);
      tyrandemereCard.classList.remove(`ps-${p6}`);
      eliseCard.classList.remove(`ps-${p7}`);
      dianaCard.classList.remove(`ps-${p4}`);

      // Add new class for step 2

      katarinaCard.classList.add(`ps-${p6}`);
      eliseCard.classList.add(`ps-${p1}`);
      jaximusCard.classList.add(`ps-${p2}`);
      dariusCard.classList.add(`ps-${p3}`);
      garenCard.classList.add(`ps-${p4}`);
      tyrandemereCard.classList.add(`ps-${p7}`);
      dianaCard.classList.add(`ps-${p5}`);

      counter++;
    } else if (counter == 3) {
      // Reemove previous class for step 3

      dariusCard.classList.remove(`ps-${p3}`);
      garenCard.classList.remove(`ps-${p4}`);
      dianaCard.classList.remove(`ps-${p5}`);
      katarinaCard.classList.remove(`ps-${p6}`);
      tyrandemereCard.classList.remove(`ps-${p7}`);
      eliseCard.classList.remove(`ps-${p1}`);
      jaximusCard.classList.remove(`ps-${p2}`);

      // Add new class for step 3

      dariusCard.classList.add(`ps-${p4}`);
      garenCard.classList.add(`ps-${p5}`);
      dianaCard.classList.add(`ps-${p6}`);
      katarinaCard.classList.add(`ps-${p7}`);
      tyrandemereCard.classList.add(`ps-${p1}`);
      eliseCard.classList.add(`ps-${p2}`);
      jaximusCard.classList.add(`ps-${p3}`);

      counter++;
    } else if (counter == 4) {
      // Reemove previous class for step 3

      dariusCard.classList.remove(`ps-${p4}`);
      garenCard.classList.remove(`ps-${p5}`);
      dianaCard.classList.remove(`ps-${p6}`);
      katarinaCard.classList.remove(`ps-${p7}`);
      tyrandemereCard.classList.remove(`ps-${p1}`);
      eliseCard.classList.remove(`ps-${p2}`);
      jaximusCard.classList.remove(`ps-${p3}`);

      // Add new class for step 3

      dariusCard.classList.add(`ps-${p5}`);
      garenCard.classList.add(`ps-${p6}`);
      dianaCard.classList.add(`ps-${p7}`);
      katarinaCard.classList.add(`ps-${p1}`);
      tyrandemereCard.classList.add(`ps-${p2}`);
      eliseCard.classList.add(`ps-${p3}`);
      jaximusCard.classList.add(`ps-${p4}`);

      counter++;
    } else if (counter == 5) {
      // Reemove previous class for step 3

      dariusCard.classList.remove(`ps-${p5}`);
      garenCard.classList.remove(`ps-${p6}`);
      dianaCard.classList.remove(`ps-${p7}`);
      katarinaCard.classList.remove(`ps-${p1}`);
      tyrandemereCard.classList.remove(`ps-${p2}`);
      eliseCard.classList.remove(`ps-${p3}`);
      jaximusCard.classList.remove(`ps-${p4}`);

      // Add new class for step 3

      dariusCard.classList.add(`ps-${p6}`);
      garenCard.classList.add(`ps-${p7}`);
      dianaCard.classList.add(`ps-${p1}`);
      katarinaCard.classList.add(`ps-${p2}`);
      tyrandemereCard.classList.add(`ps-${p3}`);
      eliseCard.classList.add(`ps-${p4}`);
      jaximusCard.classList.add(`ps-${p5}`);

      counter++;
    } else if (counter == 6) {
      // Reemove previous class for step 3

      dariusCard.classList.remove(`ps-${p6}`);
      garenCard.classList.remove(`ps-${p7}`);
      dianaCard.classList.remove(`ps-${p1}`);
      katarinaCard.classList.remove(`ps-${p2}`);
      tyrandemereCard.classList.remove(`ps-${p3}`);
      eliseCard.classList.remove(`ps-${p4}`);
      jaximusCard.classList.remove(`ps-${p5}`);

      // Add new class for step 3

      dariusCard.classList.add(`ps-${p7}`);
      garenCard.classList.add(`ps-${p1}`);
      dianaCard.classList.add(`ps-${p2}`);
      katarinaCard.classList.add(`ps-${p3}`);
      tyrandemereCard.classList.add(`ps-${p4}`);
      eliseCard.classList.add(`ps-${p5}`);
      jaximusCard.classList.add(`ps-${p6}`);

      counter++;
    } else if (counter == 7) {
      // Reemove previous class for step 3

      dariusCard.classList.remove(`ps-${p7}`);
      garenCard.classList.remove(`ps-${p1}`);
      dianaCard.classList.remove(`ps-${p2}`);
      katarinaCard.classList.remove(`ps-${p3}`);
      tyrandemereCard.classList.remove(`ps-${p4}`);
      eliseCard.classList.remove(`ps-${p5}`);
      jaximusCard.classList.remove(`ps-${p6}`);

      // Add new class for step 3

      dariusCard.classList.add(`ps-${p1}`);
      garenCard.classList.add(`ps-${p2}`);
      dianaCard.classList.add(`ps-${p3}`);
      katarinaCard.classList.add(`ps-${p4}`);
      tyrandemereCard.classList.add(`ps-${p5}`);
      eliseCard.classList.add(`ps-${p6}`);
      jaximusCard.classList.add(`ps-${p7}`);
      counter = 1;
    }
    i++; //  increment the counter
    if (i < 1000) {
      //  if the counter < 1000, call the loop function
      myLoop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 5000);
}

myLoop(); //  start the loop

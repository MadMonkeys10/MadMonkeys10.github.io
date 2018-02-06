/*
  Id's to use
  strats
  wepSt
  LP

*/



var strats = "null";

$.get("strats.txt").done(function(text) {
  console.log("Sucess");
  strats = text.split("\n");

  strats.forEach(function(element) {
    console.log(element);
  });

}).fail (function() {
  console.log("Error");

  strats = ["A","B", ""];

  $(function() {
    pickRandStrat();
  });

});

$(document).ajaxComplete(function() {
  console.log("ajax Complete");
  pickRandStrat();
});

function start() {

  console.log("Created by George Masters and William Masters");
  //pickRandStrat();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickRandStrat() {
  let randStrat = strats[getRandomInt(strats.length-1)];
  console.log("console.log(): " + randStrat);
  document.getElementById("strat").innerHTML = randStrat;
}

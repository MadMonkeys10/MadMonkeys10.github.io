/*
  Id's to use
  strats
  wepSt
  LP

*/



var strats = "null";
var weapons = "null";

$.get("strats.txt").done(function(text) {
  console.log("Sucess");
  strats = text.split("\n");

  strats.forEach(function(element) {
    console.log(element);
  });

}).fail (function() {
  console.log("Error");

  strats = ["A", "B", "C", "D", ""];

  $(function() {
    pickRandStrat();
  });

});

$.get("weapons.txt").done(function(text) {
  console.log("Sucess");
  weapons = text.split("\n");

  weapons.forEach(function(element) {
    console.log(element);
  });

}).fail (function() {
  console.log("Error");

  weapons = ["A", "B", "C", "D", ""];

  $(function() {
    pickRandWep();
  });

});

$(document).ajaxComplete(function() {
  console.log("ajax Complete");
  pickRandStrat();
  pickRandWep();
});

function start() {

  console.log("Created by George Masters and William Masters");
  //pickRandStrat();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickRandStrat() {
  //console.log("console.log(): " + strats[getRandomInt(strats.length-1)]);
  document.getElementById("strat").innerHTML = strats[getRandomInt(strats.length-1)];
}

function pickRandWep() {
  //console.log("console.log(): " + strats[getRandomInt(strats.length-1)]);
  document.getElementById("wepSt").innerHTML = weapons[getRandomInt(strats.length-1)];
}

var strats = "null";

$.get("strats.txt").done(function(text) {
  console.log("Sucess");
  strats = text.split("\n");
  strats.forEach(function(element) {
    console.log(element);
  });

});

$(document).ajaxComplete(function() {
  console.log("ajax Complete");
  pickRandStrat();
});










function start() {
  //alert("start();");
  //getData();

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickRandStrat() {
  console.log(strats[getRandomInt(strats.length-2)]);
  document.getElementById("strat").innerHTML = strats[getRandomInt(4)];
}

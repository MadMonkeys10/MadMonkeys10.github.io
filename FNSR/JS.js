var strats = "null";

// $.ajax({
//     type:    "GET",
//     url:     "strats.txt",
//     success: function(text) {
//       alert("Sucess");
//       strats = text.split("\n");
//       strats.forEach(function(element) {
//         console.log(element);
//       });
//     },
//     error: function() {
//       alert("Error");
//     }
//   });

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
  alert("start();");
  //getData();

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickRandStrat() {
  console.log(strats[getRandomInt(4)]);
  document.getElementById("test").innerHTML = "test" + strats[getRandomInt(4)];
}

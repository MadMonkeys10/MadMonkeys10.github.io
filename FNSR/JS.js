$.ajax({
    type:    "GET",
    url:     "strats.txt",
    success: function(text) {
      alert("Sucess");
      var strats = text.split("\n");
      strats.forEach(function(element) {
        console.log(element);
      });
    }
    error: function() {
      alert("Error");
    }
  });

$(document).ajaxComplete(function() {
  $(".log").text("Ajax complete");
  pickRandStrat();
});










function start() {
  alert("start();")
  //getData();

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickRandStrat() {
  document.getElementById("test").innerHTML = strats[getRandomInt(4)];
}

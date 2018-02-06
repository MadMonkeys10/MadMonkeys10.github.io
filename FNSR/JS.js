$.ajax({
    type:    "GET",
    url:     "strats.txt",
    success: function(text) {
        alert("Sucess");
        var strats = text.split("\n");
        strats.forEach(function(element) {
          console.log(element);
        });
        document.getElementById("testArea").innerHTML = strats;

    },
    error:   function() {
        alert("Error");
    }
});

function start() {
  //alert("TEST");
}

$.ajax({
    type:    "GET",
    url:     "strats.txt",
    success: function(text) {
        alert("Sucess");
        var strats = text.split("\n");
        strats.forEach(function(element) {
          document.getElementById("testArea").innerHTML = document.getElementById("testArea").innerHTML + "<p>" + element + "</p>"
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

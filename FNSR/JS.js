$.ajax({
    type:    "GET",
    url:     "strats.txt",
    success: function(text) {
        alert("Sucess");
        var strats = text;

        document.getElementById("testArea").innerHtml = strats;

    },
    error:   function() {
        alert("Error");
    }
});

function start() {
  //alert("TEST");
}

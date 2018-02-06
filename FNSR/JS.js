$.ajax({
    type:    "GET",
    url:     "strats.txt",
    success: function(text) {
        alert("Sucess");
    },
    error:   function() {
        alert("Error");
    }
});

function start() {
  //alert("TEST");
}

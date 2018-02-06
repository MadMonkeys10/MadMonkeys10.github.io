function start() {
  let data = loadFile("strats.txt");
  document.getElementById("test").innerHtml = yes();
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function yes() {
  return "Hello";
}

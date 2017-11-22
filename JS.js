function test() {
  //alert("YEET");
}

function attack() {
  var n = rand(16);  // returns a number between 1 and 16;
  //alert(n);
  var op;
  var gn;
  var sg;
  var Gadget;
  switch (n){
    case 1: {
      op = "Sledge";
      gn = pikr(["M590A1","L85A2"]);
      sg = pikr(["P226 MK 25", "SMG-11"]);
      Gadget = pikr(["Frag grenade", "Stun granade"])
      break;}
    case 2:{
      op = "Thatcher";
      gn = pikr(["M590A1","L85A2","AR33"]);
      sg = pikr(["P226 MK 25"]);
      Gadget = pikr(["Frag grenade", "Stun granade"])
      break;}
    case 3:{
      op = "Ash";
      break;}
    case 4:{ op = "Thermite"; break;}
    case 5:{ op = "Twitch"; break;}
    case 6:{ op = "Montagne"; break;}
    case 7:{ op = "Glaz"; break;}
    case 8:{ op = "Fuze"; break;}
    case 9:{ op = "Blitz"; break;}
    case 10:{ op = "IQ"; break;}
    case 11:{ op = "Buck"; break;}
    case 12:{ op = "Black beard"; break;}
    case 13:{ op = "Capitao"; break;}
    case 14:{ op = "Hibana"; break;}
    case 15:{ op = "Jackel"; break;}
    case 16:{ op = "Ying"; break;}
  }
  //alert(op);
  document.getElementById("name").innerHTML =  op;
  document.getElementById("G").innerHTML =  gn;
  document.getElementById("S").innerHTML =  sg;
  document.getElementById("Gd").innerHTML =  Gadget;
}

function defend() {
  //alert("defend");
  var n = rand(17);  // returns a number between 1 and 17;
  //alert(n);
  var op;
  var gn;
  var sg;
  var Gadget;
  switch (n){
    case 1:{ op = "Smoke"; break;}
    case 2:{ op = "Mute"; break;}
    case 3:{ op = "Castle"; break;}
    case 4:{ op = "Pulse"; break;}
    case 5:{ op = "Doc"; break;}
    case 6:{ op = "Rook"; break;}
    case 7:{ op = "Kapkan"; break;}
    case 8:{ op = "Techanka"; break;}
    case 9:{ op = "Jager"; break;}
    case 10:{ op = "Bandit"; break;}
    case 11:{ op = "Frost"; break;}
    case 12:{ op = "Valkyrie"; break;}
    case 13:{ op = "Caveira"; break;}
    case 14:{ op = "Echo"; break;}
    case 15:{ op = "Mira"; break;}
    case 16:{ op = "Lesion"; break;}
    case 17:{ op = "Ela"; break;}
  }
  //alert(op);
  document.getElementById("name").innerHTML =  op;
  document.getElementById("G").innerHTML =  gn;
  document.getElementById("S").innerHTML =  sg;
  document.getElementById("Gd").innerHTML =  Gadget;
}

function rand(x) {
  return (Math.floor(Math.random() * x) + 1); // returns a number between 1 and x;
}

function pikr(arr){
  return(arr[rand(arr.length)-1]);
}

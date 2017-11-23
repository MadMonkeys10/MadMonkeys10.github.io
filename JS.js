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
      Gadget = pikr(["Frag grenade", "Stun granade"]);
      break;}
    case 2:{
      op = "Thatcher";
      gn = pikr(["M590A1","L85A2","AR33"]);
      sg = pikr(["P226 MK 25"]);
      Gadget = pikr(["Breach charge", "Claymore"]);
      break;}
    case 3:{
      op = "Ash";
      gn = pikr(["G36C","R4-C"]);
      sg = pikr(["M45 Meusoc","5.7 USG"]);
      Gadget = pikr(["Breach charge", "Stun granade"]);
      break;}
    case 4:{ op = "Thermite";
      gn = pikr(["M1014","556XI"]);
      sg = pikr(["5.7 USG","M45 Meusoc"]);
      Gadget = pikr(["Claymore", "Stun granade"]);
      break;}
    case 5:{ op = "Twitch";
      gn = pikr(["SG-CQB","F2","417"]);
      sg = pikr(["LFP586","P9"]);
      Gadget = pikr(["Breach charge", "Claymore"]);
      break;}
    case 6:{ op = "Montagne";
      gn = pikr(["Extended shield"]);
      sg = pikr(["P9","LFP586"]);
      Gadget = pikr(["Smoke granade", "Stun granade"]);
      break;}
    case 7:{ op = "Glaz";
      gn = pikr(["OTs-03"]);
      sg = pikr(["PMM","GSH-18"]);
      Gadget = pikr(["Claymore", "Smoke granade"]);
      break;}
    case 8:{ op = "Fuze";
    gn = pikr(["AK-12","Ballistic Sheild","6P41"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
     break;}
    case 9:{ op = "Blitz";
    gn = pikr(["Flash Shield"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
     break;}
    case 10:{ op = "IQ";
    gn = pikr(["AUG A2","552 Commando","68A1"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Frag grenade", "Breach charge"]);
     break;}
    case 11:{ op = "Buck";
    gn = pikr(["C8-SFW","CAMRS"]);
    sg = pikr(["PK1 9mm"]);
    Gadget = pikr(["Frag grenade", "Stun granade"]);
     break;}
    case 12:{ op = "Black beard";
    gn = pikr(["MK17 CQB","SR-25",]);
    sg = pikr(["D-50"]);
    Gadget = pikr(["Breach charge", "Stun granade"]);
     break;}
    case 13:{ op = "Capitao";
    gn = pikr(["PARA-308","M249",]);
    sg = pikr(["PRB92"]);
    Gadget = pikr(["Claymore", "Stun granade"]);
     break;}
    case 14:{ op = "Hibana";
    gn = pikr(["TYPE-89","Supernova"]);
    sg = pikr(["P229","Bearing 9"]);
    Gadget = pikr(["Claymore", "Stun granade"]);
     break;}
    case 15:{ op = "Jackel";
    gn = pikr(["C7E","PDW9","ITA12L"]);
    sg = pikr(["USP40","ITA12s"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
     break;}
    case 16:{ op = "Ying";
    gn = pikr(["T-95 LSW","SIX12"]);
    sg = pikr(["Q-929"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
     break;}
     break;}
    case 16:{ op = "Zofia";
    gn = pikr(["LMGE","C762"]);
    sg = pikr(["RG15"]);
    Gadget = pikr(["Breach charge", "Claymore"]);
     break;}
     case 16:{ op = "Dokkoabi";
     gn = pikr(["MK 14 ","BOSG.12.2"]);
     sg = pikr(["SMG-12","C75 auto"]);
     Gadget = pikr(["Smoke granade", "Claymore"]);
      break;}


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
    case 1:{ op = "Smoke";
    gn = pikr(["FMG-9","M590A1"]);
    sg = pikr(["P226 MK 25","SMG-11"]);
    Gadget = pikr(["Barbed wire", "Impact granade"]);
     break;}
    case 2:{ op = "Mute";
    gn = pikr(["MP5K","M590A1"]);
    sg = pikr(["P226 MK 25"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
     break;}
    case 3:{ op = "Castle";
    gn = pikr(["UMP45","M1014"]);
    sg = pikr(["5.7 USG","M45 Meusoc"]);
    Gadget = pikr(["Deployable shield", "impact granade"]);
     break;}
    case 4:{ op = "Pulse";
    gn = pikr(["UMP45","M1014"]);
    sg = pikr(["5.7 USG","M45 Meusoc"]);
    Gadget = pikr(["Barbed wire", "Nitro cell"]);
     break;}
    case 5:{ op = "Doc";
    gn = pikr(["SG-CQB","MP5","P90"]);
    sg = pikr(["P9","LFP586"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
     break;}
    case 6:{ op = "Rook";
    gn = pikr(["SG-CQB","MP5","P90"]);
    sg = pikr(["P9","LFP586"]);
    Gadget = pikr(["Deployable shield", "Impact granade"]);
     break;}
    case 7:{ op = "Kapkan";
    gn = pikr(["9x19VSN","SASG-12"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Nitro cell", "Barbed wire"]);
     break;}
    case 8:{ op = "Techanka";
    gn = pikr(["9x19VSN","SASG-12"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
     break;}
    case 9:{ op = "Jager";
    gn = pikr(["M870","416-C Carbine"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Barbed wire", "Deployable shield"]);
     break;}
    case 10:{ op = "Bandit";
    gn = pikr(["M870","MP7"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Nitro cell", "Barbed wire"]);
     break;}
    case 11:{ op = "Frost";
    gn = pikr(["Super 90","9mm C1"]);
    sg = pikr(["MK1 9mm"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
     break;}
    case 12:{ op = "Valkyrie";
    gn = pikr(["MPX","SPAS-12"]);
    sg = pikr(["D-50"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
     break;}
    case 13:{ op = "Caveira";
    gn = pikr(["M12","SPAS-15"]);
    sg = pikr(["Lusion"]);
    Gadget = pikr(["Impact granade", "Barbed wire"]);
     break;}
    case 14:{ op = "Echo";
    gn = pikr(["MP5SD","Supernova"]);
    sg = pikr(["Bearing 9","P229"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
     break;}
    case 15:{ op = "Mira";
    gn = pikr(["Vector .45 ACP","ITA12L"]);
    sg = pikr(["USP40","ITA12S"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
     break;}
    case 16:{ op = "Lesion";
    gn = pikr(["T-5","SIX12 SD"]);
    sg = pikr(["Q-929"]);
    Gadget = pikr(["Impact granade", "Deployable shield"]);
     break;}
    case 17:{ op = "Ela";
    gn = pikr(["FO-12","Scorpion EVO 3 A1"]);
    sg = pikr(["RG15"]);
    Gadget = pikr(["Impact granade", "Barbed wire"]);
     break;}
     case 18:{ op = "Vigil";
     gn = pikr(["K1A","BOSG.12.2"]);
     sg = pikr(["C75 auto","SMG-12"]);
     Gadget = pikr(["Impact granade", "Barbed wire"]);
      break;}
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

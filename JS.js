function test() {
  //alert("YEET");
}

function attack() {
  var n = rand(18);  // returns a number between 1 and 18;
  //alert(n);
  var op;
  var gn;
  var sg;
  var Gadget;
  var loc;
  switch (n){
    case 1: {
      op = "Sledge";
      gn = pikr(["M590A1","L85A2"]);
      sg = pikr(["P226 MK 25", "SMG-11"]);
      Gadget = pikr(["Frag grenade", "Stun granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-sledge_229923.png";
      break;}
    case 2:{
      op = "Thatcher";
      gn = pikr(["M590A1","L85A2","AR33"]);
      sg = pikr(["P226 MK 25"]);
      Gadget = pikr(["Breach charge", "Claymore"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-thatcher_229926.png";
      break;}
    case 3:{
      op = "Ash";
      gn = pikr(["G36C","R4-C"]);
      sg = pikr(["M45 Meusoc","5.7 USG"]);
      Gadget = pikr(["Breach charge", "Stun granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-ash_229909.png";
      break;}
    case 4:{ op = "Thermite";
      gn = pikr(["M1014","556XI"]);
      sg = pikr(["5.7 USG","M45 Meusoc"]);
      Gadget = pikr(["Claymore", "Stun granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-thermite_229927.png";
      break;}
    case 5:{ op = "Twitch";
      gn = pikr(["SG-CQB","F2","417"]);
      sg = pikr(["LFP586","P9"]);
      Gadget = pikr(["Breach charge", "Claymore"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-twitch_229928.png";
      break;}
    case 6:{ op = "Montagne";
      gn = pikr(["Extended shield"]);
      sg = pikr(["P9","LFP586"]);
      Gadget = pikr(["Smoke granade", "Stun granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-montagne_229919.png";
      break;}
    case 7:{ op = "Glaz";
      gn = pikr(["OTs-03"]);
      sg = pikr(["PMM","GSH-18"]);
      Gadget = pikr(["Claymore", "Smoke granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-glaz_229915.png";
      break;}
    case 8:{ op = "Fuze";
    gn = pikr(["AK-12","Ballistic Sheild","6P41"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-blitz_229911.png";
     break;}
    case 9:{ op = "Blitz";
    gn = pikr(["Flash Shield"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-blitz_229911.png";
     break;}
    case 10:{ op = "IQ";
    gn = pikr(["AUG A2","552 Commando","G8A1"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Frag grenade", "Breach charge"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-iq_229916.png";
     break;}
    case 11:{ op = "Buck";
    gn = pikr(["C8-SFW","CAMRS"]);
    sg = pikr(["PK1 9mm"]);
    Gadget = pikr(["Frag grenade", "Stun granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-buck_237599.png";
     break;}
    case 12:{ op = "Black beard";
    gn = pikr(["MK17 CQB","SR-25",]);
    sg = pikr(["D-50"]);
    Gadget = pikr(["Breach charge", "Stun granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-blackbeard_250317.png";
     break;}
    case 13:{ op = "Capitao";
    gn = pikr(["PARA-308","M249",]);
    sg = pikr(["PRB92"]);
    Gadget = pikr(["Claymore", "Stun granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-capitao_263117.png";
     break;}
    case 14:{ op = "Hibana";
    gn = pikr(["TYPE-89","Supernova"]);
    sg = pikr(["P229","Bearing 9"]);
    Gadget = pikr(["Claymore", "Stun granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-hibana_275645.png";
     break;}
    case 15:{ op = "Jackel";
    gn = pikr(["C7E","PDW9","ITA12L"]);
    sg = pikr(["USP40","ITA12s"]);
    Gadget = pikr(["Breach charge", "Smoke granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-jackal_286946.png";
     break;}
    case 16:{
      op = "Ying";
      gn = pikr(["T-95 LSW","SIX12"]);
      sg = pikr(["Q-929"]);
      Gadget = pikr(["Breach charge", "Smoke granade"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-ying_302078.png";
      break;}
    case 17:{ op = "Zofia";
      gn = pikr(["LMGE","C762"]);
      sg = pikr(["RG15"]);
      Gadget = pikr(["Breach charge", "Claymore"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operator-zofia_operatorlist_307019.png";
      break;}
    case 18:{ op = "Dokkoabi";
      gn = pikr(["MK 14 ","BOSG.12.2"]);
      sg = pikr(["SMG-12","C75 auto"]);
      Gadget = pikr(["Smoke granade", "Claymore"]);
      loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operator-dokkaebi-list_307129.png";
      break;}


  }
  //alert(op);
  document.getElementById("name").innerHTML =  op;
  document.getElementById("G").innerHTML =  gn;
  document.getElementById("S").innerHTML =  sg;
  document.getElementById("Gd").innerHTML =  Gadget;
  document.getElementById("pic").src = loc;
}

function defend() {
  //alert("defend");
  var n = rand(17);  // returns a number between 1 and 17;
  //alert(n);
  var op;
  var gn;
  var sg;
  var Gadget;
  var loc;
  switch (n){
    case 1:{ op = "Smoke";
    gn = pikr(["FMG-9","M590A1"]);
    sg = pikr(["P226 MK 25","SMG-11"]);
    Gadget = pikr(["Barbed wire", "Impact granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-smoke_229924.png";
     break;}
    case 2:{ op = "Mute";
    gn = pikr(["MP5K","M590A1"]);
    sg = pikr(["P226 MK 25"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-mute_229920.png";
     break;}
    case 3:{ op = "Castle";
    gn = pikr(["UMP45","M1014"]);
    sg = pikr(["5.7 USG","M45 Meusoc"]);
    Gadget = pikr(["Deployable shield", "impact granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-castle_229912.png";
     break;}
    case 4:{ op = "Pulse";
    gn = pikr(["UMP45","M1014"]);
    sg = pikr(["5.7 USG","M45 Meusoc"]);
    Gadget = pikr(["Barbed wire", "Nitro cell"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-pulse_229921.png";
     break;}
    case 5:{ op = "Doc";
    gn = pikr(["SG-CQB","MP5","P90"]);
    sg = pikr(["P9","LFP586"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-doc_229913.png";
     break;}
    case 6:{ op = "Rook";
    gn = pikr(["SG-CQB","MP5","P90"]);
    sg = pikr(["P9","LFP586"]);
    Gadget = pikr(["Deployable shield", "Impact granade"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-rook_229922.png";
     break;}
    case 7:{ op = "Kapkan";
    gn = pikr(["9x19VSN","SASG-12"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Nitro cell", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-kapkan_229918.png";
     break;}
    case 8:{ op = "Techanka";
    gn = pikr(["9x19VSN","SASG-12"]);
    sg = pikr(["PMM","GSH-18"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-tachanka_229925.png";
     break;}
    case 9:{ op = "Jager";
    gn = pikr(["M870","416-C Carbine"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Barbed wire", "Deployable shield"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-jager_229917.png";
     break;}
    case 10:{ op = "Bandit";
    gn = pikr(["M870","MP7"]);
    sg = pikr(["P12"]);
    Gadget = pikr(["Nitro cell", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-bandit_229910.png";
     break;}
    case 11:{ op = "Frost";
    gn = pikr(["Super 90","9mm C1"]);
    sg = pikr(["MK1 9mm"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-frost_237600.png";
     break;}
    case 12:{ op = "Valkyrie";
    gn = pikr(["MPX","SPAS-12"]);
    sg = pikr(["D-50"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-valkyrie_250318.png";
     break;}
    case 13:{ op = "Caveira";
    gn = pikr(["M12","SPAS-15"]);
    sg = pikr(["Lusion"]);
    Gadget = pikr(["Impact granade", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-caveira_263109.png";
     break;}
    case 14:{ op = "Echo";
    gn = pikr(["MP5SD","Supernova"]);
    sg = pikr(["Bearing 9","P229"]);
    Gadget = pikr(["Deployable shield", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-echo_275644.png";
     break;}
    case 15:{ op = "Mira";
    gn = pikr(["Vector .45 ACP","ITA12L"]);
    sg = pikr(["USP40","ITA12S"]);
    Gadget = pikr(["Deployable shield", "Nitro cell"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-mira_286947_302110.png";
     break;}
    case 16:{ op = "Lesion";
    gn = pikr(["T-5","SIX12 SD"]);
    sg = pikr(["Q-929"]);
    Gadget = pikr(["Impact granade", "Deployable shield"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-lesion_286947.png";
     break;}
    case 17:{ op = "Ela";
    gn = pikr(["FO-12","Scorpion EVO 3 A1"]);
    sg = pikr(["RG15"]);
    Gadget = pikr(["Impact granade", "Barbed wire"]);
    loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operators-list-ela_302099.png";
     break;}
     case 18:{ op = "Vigil";
     gn = pikr(["K1A","BOSG.12.2"]);
     sg = pikr(["C75 auto","SMG-12"]);
     Gadget = pikr(["Impact granade", "Barbed wire"]);
     loc = "https://ubistatic19-a.akamaihd.net/resource/en-gb/game/rainbow6/siege/r6-operator-vigil-list_307138.png";
      break;}
  }
  //alert(op);
  document.getElementById("name").innerHTML =  op;
  document.getElementById("G").innerHTML =  gn;
  document.getElementById("S").innerHTML =  sg;
  document.getElementById("Gd").innerHTML =  Gadget;
  document.getElementById("pic").src = loc;
}

function rand(x) {
  return (Math.floor(Math.random() * x) + 1); // returns a number between 1 and x;
}

function pikr(arr){
  return(arr[rand(arr.length)-1]);
}

window.onload = function () {


  document.getElementById("smileButton").addEventListener("click", smileCode);

  document.getElementById("mouthButton").addEventListener("click", mouthCode);
  document.getElementById("mouthTeethButton").addEventListener("click", mouthTeethCode);
  document.getElementById("lookButton").addEventListener("click", lookCode);
  document.getElementById("lookLeftButton").addEventListener("click", lookLeftCode);
  document.getElementById("lookRightButton").addEventListener("click", lookRightCode);
  document.getElementById("lookDownButton").addEventListener("click", lookDownCode);

  document.getElementById("frowningButton").addEventListener("click", frownNumber);
  document.getElementById("frowningButton").addEventListener("click", frownCode);

  document.getElementById("eyebrowsRaiseButton").addEventListener("click", eyebrowNumber);
  document.getElementById("eyebrowsRaiseButton").addEventListener("click", eyebrowRaiseCode);

  document.getElementById("eyebrowsSmallButton").addEventListener("click", eyebrowSmallNumber);
  document.getElementById("eyebrowsSmallButton").addEventListener("click", eyebrowsSmallCode);

  document.getElementById("frownSmallButton").addEventListener("click", frownSmallNumber);
  document.getElementById("frownSmallButton").addEventListener("click", frownSmallCode);

  document.getElementById("nodButton").addEventListener("click", nodCode);
  document.getElementById("shakeSlowButton").addEventListener("click", shakeSlowCode);
  document.getElementById("shakeFastButton").addEventListener("click", shakeFastCode);
  document.getElementById("leanInButton").addEventListener("click", leanInCode);
  document.getElementById("questionButton").addEventListener("click", questionCode);
  document.getElementById("friendlyButton").addEventListener("click", friendlyCode);
  document.getElementById("agreeButton").addEventListener("click", agreeCode);
  document.getElementById("disagreeButton").addEventListener("click", disagreeCode);



  document.getElementById("plusOne").addEventListener("click", addOne);
  document.getElementById("minusOne").addEventListener("click", removeOne);

  document.getElementById("stPlusOne").addEventListener("click", stAddOne);
  document.getElementById("stMinusOne").addEventListener("click", stRemoveOne);

  document.getElementById("enPlusOne").addEventListener("click", enAddOne);
  document.getElementById("enMinusOne").addEventListener("click", enRemoveOne);

  document.getElementById("eyebrowSmallUpdate").addEventListener("click", updateEyebrowSmall);
  document.getElementById("eyebrowRaiseUpdate").addEventListener("click", updateEyebrowRaise);
  document.getElementById("frownUpdate").addEventListener("click", updateFrown);
  document.getElementById("frownSmallUpdate").addEventListener("click", updateSmallFrown);

  var dura = 0;
  var blendSt = 0;
  var blendEn = 0;

  function smileCode() {

    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='smileLarge' duration='3.5' blendStart='0.5' blendEnd='0.5' peak='0.8'/>";
  }

  function mouthCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='mouthOpen' duration='3.5' blendStart='0.5' blendEnd='0.5'/>";
  }

  function mouthTeethCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='mouthOpenTeeth' duration='3.5' blendStart='0.5' blendEnd='0.5'/>";
  }

  function lookCode() {
    document.getElementById("textReturn").innerHTML = "<trl-config lookat='camera' speed='3.5'/>";
  }

  function lookLeftCode() {
    document.getElementById("textReturn").innerHTML = "<trl-config lookat='20,0,0' enable='true' speed='4' wait='2.5' returnSpeed='3.5' absolute='false' /><trl-anim type='aux' id='translateRotateLeftSmall' duration='2.5' />";
  }

  function lookRightCode() {
    document.getElementById("textReturn").innerHTML = "<trl-config lookat='-20,0,0' enable='true' speed='4' wait='2.5' returnSpeed='3.5' absolute='false' /><trl-anim type='aux' id='translateRotateRightSmall' duration='2.5' />";
  }

  function lookDownCode() {
    document.getElementById("textReturn").innerHTML = "<trl-config lookat='0,0,-20' enable='true' speed='3.75' wait='2.5' returnSpeed='5.25' absolute='false' /><trl-anim type='aux' id='tiltDownLarge3' duration='2.5' />";
  }


  function eyebrowNumber() {
    dura = 4;
    blendSt = 1;
    blendEn = 1;
    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("eyebrowRaiseUpdate").classList.add("show");
  }

  function eyebrowRaiseCode() {

    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowLarge' duration=" + parseInt(dura) + " blendStart=" + parseInt(blendEn) + " blendEnd=" + parseInt(blendEn) + "/>";
  }

  function updateEyebrowRaise() {

    eyebrowRaiseCode();

  }

  function eyebrowSmallNumber() {
    dura = 3;
    blendSt = 0;
    blendEn = 0;
    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("eyebrowSmallUpdate").classList.add("show");

  }

  function eyebrowsSmallCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowSmall' duration=" + parseInt(dura) + " blendStart=" + parseInt(blendSt) + " blendEnd=" + parseInt(blendEn) + " />";
  }

  function updateEyebrowSmall() {
    eyebrowsSmallCode();

  }

  function frownNumber() {
    dura = 4;
    blendSt = 1;
    blendEn = 1;

    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("frownUpdate").classList.add("show");

  }

  function frownCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration=" + parseInt(dura) + " blendStart=" + parseInt(blendSt) + " blendEnd=" + parseInt(blendEn) + "/>";
  }

  function updateFrown() {
    frownCode()

  }

  function frownSmallNumber() {
    dura = 3;
    blendSt = 1;
    blendEn = 1;
    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("frownSmallUpdate").classList.add("show");

  }

  function frownSmallCode() {

    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownSmall' duration=" + parseInt(dura) + " blendStart=" + parseInt(blendSt) + " blendEnd=" + parseInt(blendEn) + "/>";
  }

  function updateSmallFrown() {
    frownSmallCode()

  }

  function nodCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='core' id='coreNoddingLarge' duration='4' />";
  }

  function shakeSlowCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='MCshakeSlow' blendStart='1.25' blendEnd='1.25'/>";
  }

  function shakeFastCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='MCshakeFast' blendStart='1.25' blendEnd='1.25'/>";
  }

  function leanInCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='leanIn' blendStart='1' blendEnd='2'/>";
  }

  function questionCode() {

    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }

  function friendlyCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }

  function agreeCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }

  function disagreeCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }

  function addOne() {
    dura += 1;
    console.log(dura);
    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
  }

  function removeOne() {
    dura -= 1;
    console.log(dura);
    document.getElementById('durationmeter').innerHTML = parseInt(dura) + "s";
  }

  function stAddOne() {
    blendSt += 1;
    console.log(blendSt);
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
  }

  function stRemoveOne() {
    blendSt -= 1;
    console.log(blendSt);
    document.getElementById('blendStmeter').innerHTML = parseInt(blendSt) + "s";
  }

  function enAddOne() {
    blendEn += 1;
    console.log(blendEn);
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
  }

  function enRemoveOne() {
    blendEn -= 1;
    console.log(blendEn);
    document.getElementById('blendEnmeter').innerHTML = parseInt(blendEn) + "s";
  }


  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
      document.links[i].className = 'current';
    }
  }
}
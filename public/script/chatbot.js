
document.getElementById("smileButton").addEventListener("click", smileCode);
document.getElementById("frowningButton").addEventListener("click", frownCode);
document.getElementById("mouthButton").addEventListener("click", mouthCode);
document.getElementById("mouthTeethButton").addEventListener("click", mouthTeethCode);
document.getElementById("lookButton").addEventListener("click", lookCode);
document.getElementById("lookLeftButton").addEventListener("click", lookLeftCode);
document.getElementById("lookRightButton").addEventListener("click", lookRightCode);
document.getElementById("lookDownButton").addEventListener("click", lookDownCode);
document.getElementById("eyebrowsRaiseButton").addEventListener("click", eyebrowRaiseCode);
document.getElementById("eyebrowsSmallButton").addEventListener("click", eyebrowsSmallCode);
document.getElementById("frownSmallButton").addEventListener("click", frownSmallCode);
document.getElementById("nodButton").addEventListener("click", nodCode);
document.getElementById("shakeSlowButton").addEventListener("click", shakeSlowCode);
document.getElementById("shakeFastButton").addEventListener("click", shakeFastCode);
document.getElementById("leanInButton").addEventListener("click", leanInCode);
document.getElementById("questionButton").addEventListener("click", questionCode);
document.getElementById("friendlyButton").addEventListener("click", friendlyCode);
document.getElementById("agreeButton").addEventListener("click", agreeCode);
document.getElementById("disagreeButton").addEventListener("click", disagreeCode);

var dura=0;

function smileCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='smileLarge' duration='3.5' blendStart='0.5' blendEnd='0.5' peak='0.8'/>";
  }

function frownCode() {
  
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }

  function frownSmallCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownSmall' duration='3.5' blendStart='0.5' blendEnd='0.5'/>";
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
  function eyebrowRaiseCode() {
dura=4;
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowLarge' duration=" + parseInt(dura) + " blendStart='1.5' blendEnd='1.5'/>";
  }
  function eyebrowsSmallCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowSmall' duration='3.5' blendStart='0.5' blendEnd='0.5'/>";
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

  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        document.links[i].className = 'current';
    }
 }
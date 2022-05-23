



//   document.getElementById("lookButton").addEventListener("click", lookCode);
//   document.getElementById("lookDownButton").addEventListener("click", lookDownNumber);
//   document.getElementById("lookDownButton").addEventListener("click", lookDownCode);
//   document.getElementById("frowningButton").addEventListener("click", frownNumber);
//   document.getElementById("frowningButton").addEventListener("click", frownCode);

//   document.getElementById("smileButton").addEventListener("click", smileNumber);
//   document.getElementById("smileButton").addEventListener("click", smileCode);

//   document.getElementById("mouthTeethButton").addEventListener("click", mouthTeethNumber);
//   document.getElementById("mouthTeethButton").addEventListener("click", mouthTeethCode);

  document.getElementById("mouthButton").addEventListener("click", mouthNumber);
  document.getElementById("mouthButton").addEventListener("click", mouthCode);

//   document.getElementById("lookLeftButton").addEventListener("click", lookLeftNumber);
//   document.getElementById("lookLeftButton").addEventListener("click", lookLeftCode);

 
document.getElementById("lookrButton").addEventListener("click", lookRightNumber);
document.getElementById("lookrButton").addEventListener("click", lookRightCode);

//   document.getElementById("eyebrowsRaiseButton").addEventListener("click", eyebrowNumber);
//   document.getElementById("eyebrowsRaiseButton").addEventListener("click", eyebrowRaiseCode);

//   document.getElementById("eyebrowsSmallButton").addEventListener("click", eyebrowSmallNumber);
//   document.getElementById("eyebrowsSmallButton").addEventListener("click", eyebrowsSmallCode);

//   document.getElementById("frownSmallButton").addEventListener("click", frownSmallNumber);
//   document.getElementById("frownSmallButton").addEventListener("click", frownSmallCode);

//   document.getElementById("nodButton").addEventListener("click", nodNumber);
//   document.getElementById("nodButton").addEventListener("click", nodCode);

//   document.getElementById("shakeSlowButton").addEventListener("click", shakeSlowNumber);
//   document.getElementById("shakeSlowButton").addEventListener("click", shakeSlowCode);

//   document.getElementById("shakeFastButton").addEventListener("click", shakeFastNumber);
//   document.getElementById("shakeFastButton").addEventListener("click", shakeFastCode);

//   document.getElementById("leanInButton").addEventListener("click", leanInNumber);
//   document.getElementById("leanInButton").addEventListener("click", leanInCode);
  
//   document.getElementById("questionButton").addEventListener("click", questionCode);
//   document.getElementById("friendlyButton").addEventListener("click", friendlyCode);
//   document.getElementById("agreeButton").addEventListener("click", agreeCode);
//   document.getElementById("disagreeButton").addEventListener("click", disagreeCode);



  document.getElementById("plusOne").addEventListener("click", addOne);
  document.getElementById("minusOne").addEventListener("click", removeOne);

  document.getElementById("stPlusOne").addEventListener("click", stAddOne);
  document.getElementById("stMinusOne").addEventListener("click", stRemoveOne);

  document.getElementById("enPlusOne").addEventListener("click", enAddOne);

  document.getElementById("enMinusOne").addEventListener("click", enRemoveOne);

//   document.getElementById("smileUpdate").addEventListener("click", updateSmile);
//   document.getElementById("nodUpdate").addEventListener("click", updateNod);
  document.getElementById("mouthUpdate").addEventListener("click", updateMouth);
  

//   document.getElementById("mouthTeethUpdate").addEventListener("click", updateMouthTeeth);
//   document.getElementById("lookDownUpdate").addEventListener("click", updateLookDown);
 document.getElementById("lookRightUpdate").addEventListener("click", updatelookRight);
//   document.getElementById("lookLeftUpdate").addEventListener("click", updateLookLeft);
//   document.getElementById("eyebrowSmallUpdate").addEventListener("click", updateEyebrowSmall);
//   document.getElementById("eyebrowRaiseUpdate").addEventListener("click", updateEyebrowRaise);
//   document.getElementById("frownUpdate").addEventListener("click", updateFrown);
//   document.getElementById("frownSmallUpdate").addEventListener("click", updateSmallFrown);
//   document.getElementById("shakeFastUpdate").addEventListener("click", updateShakeSlow);
//   document.getElementById("shakeSlowUpdate").addEventListener("click", UpdateShakeFast);
//   document.getElementById("leanInUpdate").addEventListener("click", updateLeanIn);

  var dura = 0;
  var blendSt = 0;
  var blendEn = 0;


//   function smileNumber() {
//     dura = 3;
//     blendSt = 0;
//     blendEn = 1;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("smileUpdate").classList.add("show");
//   }
//   function smileCode() {

//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='smileLarge' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + " peak='0.8'/>";
//   }
// function updateSmile() {
//   smileCode();
// }
  function mouthNumber() {
    dura = 3;
    blendSt = 1;
    blendEn = 1;
    document.getElementById('durationmeter').innerHTML = dura + "s";
    document.getElementById('blendStmeter').innerHTML = blendSt + "s";
    document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("mouthUpdate").classList.add("show");
  }

  function mouthCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='mouthOpen' duration=" + dura + "' blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
  }

  function updateMouth() {
    mouthCode();
  }

//   function mouthTeethNumber() {
//     dura = 2.5;
//     blendSt = 2;
//     blendEn = 2;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("mouthTeethUpdate").classList.add("show");
//   }

//   function mouthTeethCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='mouthOpenTeeth' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }

//   function updateMouthTeeth() {
//     mouthTeethCode();
//   }

//   function lookCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-config lookat='camera' speed='3.5'/>";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//   }

//   function lookLeftNumber() {
//     dura = 2.5;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("lookLeftUpdate").classList.add("show");
//   }

//   function lookLeftCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-config lookat='20,0,0' enable='true' speed='4' wait='2.5' returnSpeed='3.5' absolute='false' /><trl-anim type='aux' id='translateRotateLeftSmall' duration=" + dura + " />";
//   }

//   function updateLookLeft() {
//     lookLeftCode();
//   }

  function lookRightNumber() {
    dura = 4;
    blendSt = 1;
    blendEn = 1;
    document.getElementById('durationmeter').innerHTML = dura + "s";
    document.getElementById('blendStmeter').innerHTML = blendSt + "s";
    document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
    document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
    document.getElementById("lookRightUpdate").classList.add("show");
  }

function lookRightCode() {
document.getElementById("textReturn").innerHTML = "<trl-config lookat='-20,0,0' enable='true' speed='4' wait='2.5' returnSpeed='3.5' absolute='false' /><trl-anim type='aux' id='translateRotateRightSmall' duration=" + dura + " />";
 }

 function updateLookRight() {

 lookRightCode();

}

//   function lookDownNumber() {
//     dura = 2.5;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("lookDownUpdate").classList.add("show");
//   }

//   function lookDownCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-config lookat='0,0,-20' enable='true' speed='3.75' wait='2.5' returnSpeed='5.25' absolute='false' /><trl-anim type='aux' id='tiltDownLarge3' duration=" + dura + " />";
//   }

//   function updateLookDown() {

//     lookDownCode();

//   }

//   function eyebrowNumber() {
//     dura = 4;
//     blendSt = 1;
//     blendEn = 1;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("eyebrowRaiseUpdate").classList.add("show");
//   }

//   function eyebrowRaiseCode() {

//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowLarge' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }

//   function updateEyebrowRaise() {

//     eyebrowRaiseCode();

//   }

//   function eyebrowSmallNumber() {
//     dura = 3;
//     blendSt = 0;
//     blendEn = 0;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("eyebrowSmallUpdate").classList.add("show");

//   }

//   function eyebrowsSmallCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='raisedBrowSmall' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + " />";
//   }

//   function updateEyebrowSmall() {
//     eyebrowsSmallCode();

//   }

//   function frownNumber() {
//     dura = 4;
//     blendSt = 1;
//     blendEn = 1;

//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("frownUpdate").classList.add("show");

//   }

//   function frownCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }

//   function updateFrown() {
//     frownCode();

//   }

//   function frownSmallNumber() {
//     dura = 3;
//     blendSt = 1;
//     blendEn = 1;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("frownSmallUpdate").classList.add("show");

//   }

//   function frownSmallCode() {

//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownSmall' duration=" + dura + " blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }

//   function updateSmallFrown() {
//     frownSmallCode()

//   }

//   function nodNumber() {
//     dura = 4;
//     document.getElementById('durationmeter').innerHTML = dura + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("nodUpdate").classList.add("show");

//   }

//   function nodCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='core' id='coreNoddingLarge' duration=" + dura + " />";
//   }

//   function updateNod() {
//     nodCode();
//   }

//   function shakeSlowNumber() {
//     blendSt = 1;
//     blendEn = 3;
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("shakeSlowUpdate").classList.add("show");

//   }
//   function shakeSlowCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='MCshakeSlow' blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }
//   function updateShakeSlow() {
//     shakeSlowCode();
//   }
//   function shakeFastNumber() {
//     blendSt = 1;
//     blendEn = 4;
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("shakeFastUpdate").classList.add("show");

//   }

//   function shakeFastCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='MCshakeFast' blendStart=" + blendst + " blendEnd=" + blendEn + "/>";
//   }
//   function UpdateShakeFast() {
//     shakeFastCode();
//   }


//   function leanInNumber() {
//     blendSt = 1;
//     blendEn = 2;
//     document.getElementById('blendStmeter').innerHTML = blendSt + "s";
//     document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
//     document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
//     document.getElementById("leanInUpdate").classList.add("show");

//   }
//   function leanInCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='leanIn' blendStart=" + blendSt + " blendEnd=" + blendEn + "/>";
//   }

//   function updateLeanIn() {
//     leanInCode();
//   }







//   function questionCode() {

//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
//   }

//   function friendlyCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
//   }

//   function agreeCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
//   }

//   function disagreeCode() {
//     document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
//   }

  function addOne() {
    dura += 0.5;
    console.log(dura);
    document.getElementById('durationmeter').innerHTML = dura + "s";
  }

  function removeOne() {
    dura -= 0.5;
    console.log(dura);
    document.getElementById('durationmeter').innerHTML = dura + "s";
  }

  function stAddOne() {
    blendSt += 0.5;
    console.log(blendSt);
    document.getElementById('blendStmeter').innerHTML = blendSt + "s";
  }

  function stRemoveOne() {
    blendSt -= 0.5;
    console.log(blendSt);
    document.getElementById('blendStmeter').innerHTML = blendSt + "s";
  }

  function enAddOne() {
    blendEn += 0.5;
    console.log(blendEn);
    document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
  }

  function enRemoveOne() {
    blendEn -= 0.5;
    console.log(blendEn);
    document.getElementById('blendEnmeter').innerHTML = blendEn + "s";
  }



  document.getElementById("copyTime").addEventListener("click", copyText);

  function copyText() {
    var Text = document.getElementById("sequence");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    document.getElementById("copyTime").innerHTML = "text copied!";
    setTimeout(resetCopy, 2000);
  }
  function resetCopy() {
    document.getElementById("copyTime").innerHTML = "Copy code"; 
}

  document.getElementById("addAnimation").addEventListener('click', () => {

    document.getElementById("sequence").innerHTML += textReturn.value;

  })



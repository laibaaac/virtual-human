document.getElementById("frownButton").addEventListener("click", frownCode);
document.getElementById("smileButton").addEventListener("click", smileCode);


function smileCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='smileLarge' duration='3.5' blendStart='0.5' blendEnd='0.5' peak='0.8'/>";
  }
  


function frownCode() {
    document.getElementById("textReturn").innerHTML = "<trl-anim type='aux' id='frownLarge' duration='4.5' blendStart='1.5' blendEnd='1.5'/>";
  }
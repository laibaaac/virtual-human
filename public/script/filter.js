

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  //if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "filterShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "filterShow");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".filtercommands");
var btns = btnContainer.getElementsByClassName("btn");
for (const btn of btns) {
  btn.addEventListener('click', function() {
    // heeft een btn in btns een class active? Zoja verwijder deze class
 
     
    const test = btnContainer.querySelectorAll('.btn')
    test.forEach(element => {
      if (element.classList.contains('active')) {
        console.log('activated filter')
        element.classList.remove('active')
      }
    });
    btn.classList.add('active')
  })
}
var testknopje = document.getElementById("codetitle")
document.getElementById("deletebtn").addEventListener("click", removeEditor);

function removeEditor() {
  dura = 101;
  if (dura > 100) {
    document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss, #speedCss").forEach((el) => {
      
      el.classList.remove('active');})
      document.getElementById("explanation").innerHTML = " You can use the mstts:express-as element to express emotions like cheerfulness, empathy, and calmness. You can also optimize the voice for different scenarios like customer service, newscast, and voice assistant.";
      document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.add("active"));
      document.getElementById("textReturn").classList.remove('hide');
      testknopje.innerHTML = "Add text to speech";
      
    document.getElementById("textReturn").placeholder = "Type text here...";
    document.getElementById("textReturn").value = "";
    document.querySelector(".activeVarious").classList.remove('show');
    document.querySelectorAll(".commands").forEach((el) => {
  el.classList.add('inactive');
  img = document.createElement('img');
  img.src = 'img/category_emotions.png';
  document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
  });
  } else {
   
    
  }}
function addEditor() {
  dura = 0;
  if (dura > 100) {
    document.getElementById("plain-textarea-id").value = '';
    document.getElementById("explanation").innerHTML = "";
    document.getElementById("codetitle").innerHTML = "Add text to speech";
    
    
  } else {
 
  }
  document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.remove("active"));
  document.querySelectorAll(".commands").forEach((el) => {
    document.getElementById("explanation").value = ""
    el.classList.remove('inactive');
  })}
  
document.getElementById("deletebtn2").addEventListener("click", removeEditor2);

function removeEditor2() {
  dura = 101;
  if (dura > 100) {
    document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss, #speedCss").forEach((el) => {
      
      el.classList.remove('active');})
    document.getElementById("codetitle").innerHTML = "Various";
    document.getElementById("textReturn").classList.add('hide');
    document.getElementById("addAnimation").classList.add('hide');
    document.querySelector(".activeVarious").classList.add('show');
    document.querySelectorAll(".commands").forEach((el) => {
  el.classList.add('inactive');

  document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
  });

  } else {
  }}
  
function addEditor() {
  dura = 0;
  if (dura > 100) {
    document.getElementById("plain-textarea-id").value = '';
    document.getElementById("explanation").innerHTML = ""
    document.getElementById("codetitle").innerHTML = "Various";
  } else {//hier

testknopje.innerHTML = "Code editor" + "<img src='/img/circle-info-solid.svg' class='infoSvg2'>" + "<p class='infoTekst2'>When an animation has been chosen you can fine-tune the animation in the code editor. Add the variation to your timeline by pressing the ???Add to animation X??? button. If you want to reset the code to its original values you can press the default button.</p></h2>";
    document.getElementById("textReturn").placeholder = "You have not added any animations yet. Choose from the categories in the animation editor above to add and/or adjust an animation.";


    document.getElementById("textReturn").classList.remove('hide');
    document.getElementById("addAnimation").classList.remove('hide');
    document.querySelector(".activeVarious").classList.remove('show');
    document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.remove("active"));
  document.querySelectorAll(".commands").forEach((el) => {
    document.getElementById("explanation").innerHTML = ""
    el.classList.remove('inactive');
  
  })}}


  
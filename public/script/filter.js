

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
// document.getElementById("emotionId").addEventListener("click", removeClass);

// TO DO querySelector naar de emotion div, add eventlistener, voer dezelfde actie uit als hierboven + filter naar emoties


// btns.forEach(element => {
//   element.addEventListener('click', function() {
//     console.log('klik op een knop')
//     element.classList.add('active')
//   })
// });

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(event) {
//     console.log(i)
//     console.log(btns)
//     // Als de button, is geklikt, check als de button class Active heeft, zo niet voeg de class active toe 
//     btns.classList.add("active");
//     var current = document.getElementsByClassName("active");
//   });
// }


//bron van code = w3school.com -- https://www.w3schools.com/howto/howto_js_filter_elements.asp//

document.getElementById("deletebtn").addEventListener("click", removeEditor);

function removeEditor() {
  dura = 101;
  if (dura > 100) {
    document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss, #speedCss").forEach((el) => {
      
      el.classList.remove('active');})
      document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.add("active"));
      document.getElementById("textReturn").classList.remove('hide');
    document.getElementById("codetitle").innerHTML = "text to speech";
    document.getElementById("textReturn").placeholder = "Type text here...";
    document.querySelector(".activeVarious").classList.remove('show');
    document.querySelectorAll(".commands").forEach((el) => {
  el.classList.add('inactive');
  img = document.createElement('img');
  img.src = 'img/category_textspeech.png';
  document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
  });
  } else {
    document.getElementById("codetitle").innerHTML = "Code editorrr";
    
  }}
function addEditor() {
  dura = 0;
  if (dura > 100) {
    document.getElementById("plain-textarea-id").value = '';
    document.getElementById("explanation").innerHTML = "";
    document.getElementById("codetitle").innerHTML = "Add text to speech";
    
    
  } else {
    document.getElementById("codetitle").innerHTML = "Code editorrrr";
  }
  document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.remove("active"));
  document.querySelectorAll(".commands").forEach((el) => {
    document.getElementById("explanation").value = ""
    el.classList.remove('inactive');
  })}
  
  document.getElementById("resetButton").addEventListener('click', () => {

    document.getElementById("plain-textarea-id").value = '';
  
    const timelineImages = Array.from(document.getElementsByClassName('timelineImg'));
    timelineImages.forEach(timelineImg => {
      timelineImg.remove();
    })})
  

// document.querySelectorAll('button').forEach(target => target.classList.remove("show"));
// document.getElementById("smileLargeUpdate").classList.add("show");
// document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss, #speedCss").forEach((el) => {
//   el.classList.remove('active');
// });
// document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss").forEach((el) => {
//   el.classList.add('active');
// });

//bron van code = w3school.com -- https://www.w3schools.com/howto/howto_js_filter_elements.asp//

document.getElementById("deletebtn2").addEventListener("click", removeEditor2);

function removeEditor2() {
  dura = 101;
  if (dura > 100) {
    document.querySelectorAll("#blendEnCss, #duraCss, #blendStCss, #speedCss").forEach((el) => {
      
      el.classList.remove('active');})
      // document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.add("active"));
 
    
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
    document.getElementById("textReturn").placeholder = "You have not added any animations yet. Choose from the categories in the animation editor above to add and/or adjust an animation.";
    document.getElementById("codetitle").innerHTML = "Code editor";
    document.getElementById("textReturn").classList.remove('hide');
    document.getElementById("addAnimation").classList.remove('hide');
    document.querySelector(".activeVarious").classList.remove('show');
  }
  document.querySelectorAll("#textReturn, .editor, .animationAdd").forEach(target => target.classList.remove("active"));
  document.querySelectorAll(".commands").forEach((el) => {
    document.getElementById("explanation").innerHTML = ""
    el.classList.remove('inactive');
  })}


  
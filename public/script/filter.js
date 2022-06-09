

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

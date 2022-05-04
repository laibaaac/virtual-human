var buttonAll = document.querySelector("#filter-all");
var buttonPeople = document.querySelector("#filter-eyes");
var buttonAnimals = document.querySelector("#filter-mouth");


function filterList(event){
  /* de ul opzoeken */
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;

  deLijst.className = "";

  deLijst.classList.add(nieuweFilter);
}

/* de radio buttons laten luisteren naar wijzigingen */
/* dan de functie filterList uitvoeren */
buttonAll.addEventListener("change", filterList);
buttonEyes.addEventListener("change", filterList);
buttonMouth.addEventListener("change", filterList);





/*document.querySelectorAll('div').forEach(target => target.classList.remove("showcommands"));
document.getElementById("eyecommands").classList.add("showcommands");*/
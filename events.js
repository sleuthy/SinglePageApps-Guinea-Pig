console.log("It works!");

var sectionItem = document.getElementsByClassName("article-section");
var outText = document.getElementById("output-target");
var header1 = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");
var textInput = document.getElementById("keypress-input");

document.getElementById("add-rounding").style.display = "block";
document.getElementById("add-border").style.display = "block";
document.getElementById("add-color").style.display = "block";
document.getElementById("intro").classList.add("bold");
document.getElementById("conclusion").classList.add("bolditalic");

textInput.onkeyup = function(){
    guineaPig.innerHTML = textInput.value;
}

document.getElementById("add-rounding")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("rounded");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("border");
});

document.getElementById("add-color")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
});

document.getElementById("make-large")
  .addEventListener("click", function() {
  guineaPig.classList.toggle("large");
});

function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outText.innerHTML = "You clicked on the " + elementText;
}

for (var i = 0; i < sectionItem.length; i++) {
  sectionItem.item(i).addEventListener("click", handleSectionClick);
}

function handleHeaderMouseOver(event) {
  outText.innerHTML ="You moved your mouse over the header!";
}

function handleHeaderMouseOut(event) {
  outText.innerHTML = "You left me!!";
}

header1.addEventListener("mouseover", handleHeaderMouseOver);
header1.addEventListener("mouseout", handleHeaderMouseOut);
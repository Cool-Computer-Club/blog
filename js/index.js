function myFunction() {
  var dropDownDisplay = document.getElementsByClassName("dropdown")[0];
  if (dropDownDisplay.style.display==="block") {
    dropDownDisplay.style.display="none";
  } else {
    dropDownDisplay.style.display="block";
  }
}

var authorMenu = document.getElementById("author-menu");
authorMenu.addEventListener("click", myFunction);

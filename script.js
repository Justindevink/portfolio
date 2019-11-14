var button = document.getElementById("inlogknop");
var element = document.querySelectorAll("form") [0];

var filterbutton = document.getElementById("filterknop");
var filterelement = document.querySelectorAll("form") [1];

button.addEventListener("click", function() {
    element.classList.toggle("laatzien");
});

filterbutton.addEventListener("click", function() {
    filterelement.classList.toggle("laatzien");
});


var nameInput = document.getElementById("name_input");
var firstnameInput = document.getElementById("firstname_input");
var birthInput = document.getElementById("birth_input");
var ageInput = document.getElementById("age_input");
var adressInput = document.getElementById("adress_input");
var numberInput = document.getElementById("number_input");

var nameSpan = document.getElementById("name_span");
var firstnameSpan = document.getElementById("firstname_span");
var birthSpan = document.getElementById("birth_span");
var ageSpan = document.getElementById("age_span");
var adressSpan = document.getElementById("adress_span");
var numberSpan = document.getElementById("number_span");

nameInput.onkeyup = function() {
    var nameValue = this.value;
    nameSpan.innerText = nameValue
}
firstnameInput.onkeyup = function() {
    var firstnameValue = this.value;
    firstnameSpan.innerText = firstnameValue
}
birthInput.onkeyup = function() {
    var birthValue = this.value;
    birthSpan.innerText = birthValue
}
ageInput.onkeyup = function() {
    var ageValue = this.value;
    ageSpan.innerText = ageValue
}
adressInput.onkeyup = function() {
    var adressValue = this.value;
    adressSpan.innerText = adressValue
}
numberInput.onkeyup = function() {
    var numberValue = this.value;
    numberSpan.innerText = numberValue
}

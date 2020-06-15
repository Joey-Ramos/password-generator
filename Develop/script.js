// Assignment code here
var characterAmountRange = document.getElementById("characterAmountRange")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var includeUpperCaseEl = document.getElementById("includeUpperCase")
var includeLowerCaseEl = document.getElementById("includeLowerCase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Sync character amount slider and number box
function syncCharacterAmount(event) {
  var value = event.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Add event listner to input character range
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
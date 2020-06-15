// Assignment code here
var characterAmountRange = document.getElementById("characterAmountRange")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var includeUpperCaseEl = document.getElementById("includeUpperCase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")
var passwordEl = document.getElementById("password")
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODE = arrayFromLowToHigh(34, 47)


// Write password to the #password input
function writePassword() {
  var characterAmount = characterAmountNumber.value
  var includeUpperCase = includeUpperCaseEl.checked
  var includeNumbers = includeNumbersEl.checked
  var includeSymbols = includeSymbolsEl.checked
  var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
  var charCodes = LOWERCASE_CHAR_CODE
  if (includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODE)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
  var passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


// Sync character amount slider and number box
function syncCharacterAmount(event) {
  var value = event.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


// Add event listner to input character range
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
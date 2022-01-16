// Assignment code here
var lowercaseEl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseEl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialEl = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var passwordCharEl = [];
var passwordLengthEl = [];

var generatePassword = function () {
  var charLength = window.prompt("How many characters would you like? Please type number between 8-128.");
  if (charLength < 8 || charLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  } 
  
  passwordLengthEl = charLength;

  // user selects if they want lowercase letters
  var lowChar = window.confirm("Do you want to use lowercase characters?");
  if (lowChar) {
  lowChar = lowercaseEl;
  }
  
  // user selects if they want uppercase letters
  var upChar = window.confirm("Do you want to use UPPERCASE characters?");
  if (upChar) {
    upChar = uppercaseEl;
  }

// user selects if they want numbers
  var numChar = window.confirm("Do you want to use numbers?");
  if (numChar) {
    numChar = numericEl;
  }

// user selects if they want special characters
  var speChar = window.confirm("Do you want to use special characters?");
  if (speChar) {
    speChar = specialEl;
  }

  var randomPassword = "";


  if (lowChar === false && upChar === false && numChar === false && speChar === false) {
    window.alert("You must select at least one (lowercase, uppercase, number, or special). Please start over.")
    return generatePassword();
  }

  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
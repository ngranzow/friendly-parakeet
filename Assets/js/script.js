// Assignment code here
var lowercaseEl = "abcdefghijklmnopqrstuvwxyz";
var uppercaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericEl = "0123456789";
var specialEl = "!@#$%^&*()+-.`~|<>=-_";

var generatePassword = function () {
  var passwordCharEl = "";
  
  var charLength = parseInt(window.prompt("How many characters would you like? Please type number between 8-128."));
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  };

  // user selects if they want lowercase letters
  var lowChar = window.confirm("Do you want to use lowercase characters?");
  if (lowChar) {
    passwordCharEl += lowercaseEl;
  };
  
  // user selects if they want uppercase letters
  var upChar = window.confirm("Do you want to use UPPERCASE characters?");
  if (upChar) {
    passwordCharEl += uppercaseEl;
  };

// user selects if they want numbers
  var numChar = window.confirm("Do you want to use numbers?");
  if (numChar) {
    passwordCharEl += numericEl;
  };

// user selects if they want special characters
  var speChar = window.confirm("Do you want to use special characters?");
  if (speChar) {
    passwordCharEl += specialEl;
  };

  // if all four option false return to start
  if (!lowChar && !upChar && !numChar && !speChar) {
    window.alert("You must select at least one (lowercase, uppercase, number, or special). Please start over.")
    return generatePassword();
  };

  var finalPassword = "";
  for (var i = 0; i < charLength; i++) {
    finalPassword += passwordCharEl[Math.floor(Math.random() * passwordCharEl.length)]
  };

  return finalPassword;
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
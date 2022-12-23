// Assignment Code
var generateBtn = document.querySelector("#generate");

// added 4 different arrays for password criteria
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var length = "";
var upperCase;
var lowerCase;
var specialCharacter;
var num;

  // function to show a series of prompts for password criteria
function generatePassword() {
  var length = (prompt("Choose password length between 8 and 128?"));
  while (length <= 7 || length >= 128) {
    alert("Password length must be between 8 and 128 characters!");
    var length = (prompt("Choose password lengh between 8 and 128?"));
  }

  var specialCharacter = confirm("Add special characters?");
  var num = confirm("Add numerical characters?");
  var lowerCase = confirm("Add lowercase characters?");
  var upperCase = confirm("Add uppercase characters?");
  
  while (upperCase === false && lowerCase === false && specialCharacter === false && num === false) {
    alert("You must choose at one least one special, numerical, lowercase, or uppercase character");
    var specialCharacter = confirm("Would you like to add special characters?");
    var num = confirm("Would you like to add numerical characters?");
    var lowerCase = confirm("Would you like to add lowercase characters?");
    var upperCase = confirm("Would you like to add uppercase characters?");
  }
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

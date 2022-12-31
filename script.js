// Assignment Code
let generateBtn = document.querySelector("#generate");

// added 4 different arrays for password criteria
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

let length = "";
let upperCase;
let lowerCase;
let specialCharacter;
let num;

  // function to show a series of prompts for password criteria
function generatePassword() {
  let length = (prompt("Choose password length between 8 and 128?"));
  while (length <= 7 || length >= 128) {
    alert("Password length must be between 8 and 128 characters!");
    let length = (prompt("Choose password lengh between 8 and 128?"));
  }

  let specialCharacter = confirm("Add special characters?");
  let num = confirm("Add numerical characters?");
  let lowerCase = confirm("Add lowercase characters?");
  let upperCase = confirm("Add uppercase characters?");
  
  while (upperCase === false && lowerCase === false && specialCharacter === false && num === false) {
    alert("You must choose at one least one special, numerical, lowercase, or uppercase character");
    let specialCharacter = confirm("Would you like to add special characters?");
    let num = confirm("Would you like to add numerical characters?");
    let lowerCase = confirm("Would you like to add lowercase characters?");
    let upperCase = confirm("Would you like to add uppercase characters?");
  }
  let passwordOutputs = []
      
  if (specialCharacter) {
    passwordOutputs = passwordOutputs.concat(specialChar)
  }

  if (num) {
    passwordOutputs = passwordOutputs.concat(number)
  }
      
  if (lowerCase) {
    passwordOutputs = passwordOutputs.concat(lower)
  }

  if (upperCase) {
    passwordOutputs = passwordOutputs.concat(upper)
  }

  console.log(passwordOutputs)

  let passwordText = [""]
      
      for (let i = 0; i < length; i++) {
        passwordText = passwordText + passwordOutputs[Math.floor(Math.random() * passwordOutputs.length)];
        console.log(passwordText)
      }
      return passwordText;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

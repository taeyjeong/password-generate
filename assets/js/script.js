// setting value for list of characters
var charList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+={}[]|?\/<>,.:;'";
// creating how the generatePassword function runs
function generatePassword () {
  var pass = prompt("Number of characters for password: 8-128"); // user's choice of password length
  if (pass >= 8 && pass <= 128) { // password must be 8-128 characters
    var charChoice = "" // user's character choices from charList
    var finalWord = ""; // random variation of user's choices (charChoice) from charList
    console.log(pass)
  } else {
    alert("Please try again."); // if the password doesnt fit 8-128 characters, it resets screen
    return;
  }
}
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
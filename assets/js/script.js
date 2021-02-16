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
  // adding numbers to password
  var numChar = confirm("add numbers?")
  if (numChar === true) {
    charChoice += charList.substring(0,10)
  }
  // adding lowercase letters to password
  var lowerChar = confirm("add lowercase letters?")
  if (lowerChar === true) {
    charChoice += charList.substring(10, 36)
  }
  // adding uppercase letters to password
  var upperChar = confirm("add uppercase letters?")
  if (upperChar === true) {
    charChoice += charList.substring(36, 62)
  }
  // adding symbols to password
  var symbols = confirm("add symbols?")
  if (symbols === true) {
    charChoice += charList.substring(62, 91)
  }
  console.log(charChoice)
  var randomChar = Math.floor(Math.random() * charChoice.length);
  var randomGen = charChoice[randomChar];
  console.log(randomGen)
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
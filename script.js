// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChars = ['A', 'B',	'C',	'D',	'E',	'F',	'G',	'H',	'I',	'J',	'K',	'L',	'M',	'N',	'O',	'P',	'Q',	'R',	'S',	'T',	'U',	'V',	'W',	'X',	'Y',	'Z', ];
var lowerChars = ['a', 'b', 'c','d','e','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialChars = ['!', '#',  '%', '^', '&', '*', '(', ')', '~',];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
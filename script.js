// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChars = 'ABCDEFGHIjKLMONPQRSTUVWXYZ'
var lowerChars = 'abcdefghijklmonpqrstuvwxyz';
var numbers = '0123456789';
var specialChars = '!#%^&*()~';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLength = parseInt(prompt('Choose a password that is between 8 and 128 characters long'));
  var password = '';
  var charPool = '';

  var includeUppderCase= confirm('Inlcude Upper Case Characters?');
  if(includeUppderCase){
    charPool = charPool + upperChars;

  }

  

  

  
  

  for (let i=0; i < passwordLength; i++){
  var randomNum = Math.floor(Math.random() * charPool.length);      
  password = password + charPool[randomNum];
  }
  return password;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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

  var passwordLength = '';  
  passwordLength = parseInt(prompt('Choose a password that is between 8 and 128 characters long'));

  
  var password = '';
  var charDepository = '';

  var includeUppderCase= confirm('Inlcude Upper Case Characters?');
  if(includeUppderCase){
    charDepository = charDepository + upperChars;
  }

  var includeLowerCase = confirm('Include lower case characters');
   if(includeLowerCase){
      charDepository
   }

   var randomNumbers = confirm("Include numbers?");
   if(randomNumbers){
    charDepository = charDepository + numbers;
   }

  var includeSpecialChars = confirm('Include Special Characters?');
  if(includeSpecialChars){
    charDepository = charDepository + specialChars;
  }   
  

  for (let i=0; i < passwordLength; i++){
  var randomNum = Math.floor(Math.random() * charDepository.length);      
  password = password + charDepository[randomNum];
  }
  
  return password;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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

  //variable holds password length input value
  var passwordLength = '';
  
  
  //Verifies minimun character length minimun
  while( passwordLength <= 7 || passwordLength >= 129){
    passwordLength = parseInt(prompt('Choose a password that is between 8 and 128 characters long'));
   //If minimun length is met, it breaks the while loop
     if(passwordLength > 8 && passwordLength < 129){
      break;
     }
  }
  
  //Password variable hold the created password created on the charDepository variable
  var password = '';
  var charDepository = '';

//Following confirms ask the types of characters passwords should include
  var includeUppderCase= confirm('Inlcude upper case characters?');
   if(includeUppderCase){
    charDepository = charDepository + upperChars;
    }

  var includeLowerCase = confirm('Include lower case characters?');
   if(includeLowerCase){
      charDepository
   }

  var randomNumbers = confirm("Include numbers?");
   if(randomNumbers){
    charDepository = charDepository + numbers;
    }

  var includeSpecialChars = confirm('Include special characters?');
    if(includeSpecialChars){
    charDepository = charDepository + specialChars;
    }   
  
//Picks random characters based on the specifications above
  for (let i=0; i < passwordLength; i++){
  var randomNum = Math.floor(Math.random() * charDepository.length);      
  password = password + charDepository[randomNum];
  }
  return password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


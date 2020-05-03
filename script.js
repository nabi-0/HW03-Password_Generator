
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

////////////////////////////////////////////////////////////////////

//generate passswork
function generatePassword() {

  var lowerCase = "abcdefghjiklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*()_+";

  var stringToUse = "";

  //password values
  //var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  var password = "";
  //parseInt will recognize imput number as number and not string
  var lengthPrompt = parseInt(prompt("HEY YOU!!!! Choose the length of your password! Just pick a number between 8 and 128... GO!!!"));

  if(typeof lengthPrompt == 'number' && lengthPrompt >= 8 && lengthPrompt <= 128) {

    var lowerCaseConfirm = confirm ("Do you like lower case letters?");
    var upperCaseConfirm = confirm ("Do you like upper case letters?");
    var numbersConfirm = confirm ("What about numbers?");
    var specialCharactersConfirm = confirm ("And characters? Do you like characters?");
  
    if(lowerCaseConfirm) stringToUse += lowerCase;
    if(upperCaseConfirm) stringToUse += upperCase;
    if(numbersConfirm) stringToUse += numbers;
    if(specialCharactersConfirm) stringToUse += specialCharacters;
    if(stringToUse === "") {

      alert("You have to pick at least one silly! :)");
      return "Try me again";
    } // 4Loop
    for(var i = 0; i< lengthPrompt; i++) {
      var randomIndex = Math.floor(Math.random() * stringToUse.length);
      password = password + stringToUse.charAt(randomIndex);
    }
    return password;
  }
  else {
    alert ("You kinda went out of range or you typed something other than a number. Did you even type anything? Stop being silly! >:|");
    return "Try me again";
  }
  //4loop character choose
  //for(var i = 0; i<= generateBtn; i++){
    //separate 
    //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenth - 1)));
  //}

  //add password to box
  //ducument.getElementById("password").value = password;

}
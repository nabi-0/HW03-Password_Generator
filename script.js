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
 
  var lengthPrompt = parseInt(prompt("Hey input number, 8-128..."));

  if(typeof lengthPrompt == 'number' && lengthPrompt >= 8 && lengthPrompt <= 128) {

    var lowerCaseConfirm = confirm ("lower case?");
    var upperCaseConfirm = confirm ("upper case?");
    var numbersConfirm = confirm ("number?");
    var specialCharactersConfirm = confirm ("characters?");
  
    if(lowerCaseConfirm) stringToUse += lowerCase;
    if(upperCaseConfirm) stringToUse += upperCase;
    if(numbersConfirm) stringToUse += numbers;
    if(specialCharactersConfirm) stringToUse += specialCharacters;
    if(stringToUse === "") {

      alert("pick one type!");
      return "try again";
    } // 4Loop
    for(var i = 0; i< lengthPrompt; i++) {
      var randomIndex = Math.floor(Math.random() * stringToUse.length);
      password = password + stringToUse.charAt(randomIndex);
    }
    return password;
  }
  else {
    alert ("out or range/ not a number");
    return "try again";
  }
  //4loop character choose
  //for(var i = 0; i<= generateBtn; i++){
    //separate 
    //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenth - 1)));
  //}

  //add password to box
  //ducument.getElementById("password").value = password;

}
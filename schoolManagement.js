//const uuidv4 = require("uuid/v4")
const prompt = require("prompt-sync")({sigint:true});
const fs = require('fs');
const { parse } = require("path");

let newStudent = {
  phoneNumber: '',
  homeAddress: '',
  emailAddress: '',
  dateOfBirth: '',
  userName: '',
  userID: '',
  gender: '',
  isLoggedin: false,
  password: '',
  firstName: '',
  lastName: '',
  middleName: ''
}

function _firstName(){
let newFirstName = prompt(`Input your first name: `)
if(!isNaN(newFirstName) && newFirstName === ''){
console.log(`Your name should not include numbers`);
}else{
  newStudent.firstName = newFirstName;
}
}

function _password(){
  let studentPassword = prompt(`Input your password: `)
  if(studentPassword.length < 6 && studentPassword === ''){
    console.log(`Input a strong password, your should not be less than six characters `)
    cont();
  }else{
    newStudent.password = studentPassword;
  }
  function cont(){
    
    let num = parseInt(prompt(`Type 1 to repeat the process, type 2 to exit: `))

    if(num === 1){
      _password();
    }else if(num === 2){
      console.clear();
      console.log(`Thank you for visiting`);
    }
      else{
      console.log("Please type a valid number")
     cont();
    }
  }
}

function _homeAddress(){
  let newHomeAddress = prompt(`Input your home address: `)
  if(!isNaN(newHomeAddress) && newHomeAddress === ""){
  console.log(`Your name should not include numbers`);
  }else{
    newStudent.homeAddress = newHomeAddress;
  }
}


function gender(){
  let newGender = prompt(`Input your gender: `).toUpperCase() ;

  if(newGender !== 'FEMALE' && newGender !== 'MALE'){
    console.log(`Invalid input`)
  }else{
    newStudent.gender = newGender;
  }
}


function _phoneNum(){
  let phoneNum = prompt(`Input your phone number: `);
  let subPhoneNum = phoneNum.substring(0,3);
  let char1 = 090, char2 = 080, char3 = 081, char4 = 070;
  if(phoneNum.length > 11 && phoneNum === ' ' && !isNaN(phoneNum) && phoneNum.length < 11){
   
    console.log('Please input the correct phone number');
    cont();
  }else if(!subPhoneNum.includes(char1) && !subPhoneNum.includes(char2) && !subPhoneNum.includes(char3) && !subPhoneNum.includes(char4)){
    console.log(`Please input the correct phone number`)
    cont();
  }
  else{
    newStudent.phoneNumber = phoneNum;
  }

  function cont(){
    let num = parseInt(prompt(`Type 1 to repeat the process, type 2 to exit: `))

    if(num === 1){
      console.clear();
      _phoneNum();
    }else if(num === 2){
      console.clear();
      console.log(`Thank you for visiting`);
    }
      else{
      console.log("Please type a valid number")
     cont();
    }
  }
}

function _middleName(){
  let newMiddleName = prompt(`Input your middle name: `)
  if(!isNaN(newMiddleName)){
  console.log(`Your name should not include numbers`);
  }else{
    newStudent.middleName = newMiddleName;
  }
  }

  function _lastName(){
    let newLastName = prompt(`Input your last name: `)
    if(!isNaN(newLastName) && newLastName === ''){
    console.log(`Your name should not include numbers`);
    }else{
      newStudent.lastName = newLastName;
    }
    }
function _email(){

  let email = prompt(`Please input your email address: `);
 let char1 = '@';  let char2 = '.com';
  if(email === " " && isNaN(email)){
    console.log('Please try again');
    _email();
    cont();
  }else if(!email.includes(char1) && !email.includes(char2)){
    console.log(`Invalid Email, please try again`)
    _email();
    cont();
  }
  else{
    newStudent.emailAddress = email;
  }

  function cont(){
    console.clear();
    let num = parseInt(prompt(`Type 1 to repeat the process, type 2 to exit: `))

    if(num === 1){
      console.clear();
      _email();
    }else if(num === 2){
      console.clear();
      console.log(`Thank you for visiting`);
    }
      else{
      console.log("Please type a valid number")
     cont();
    }
  }
}

function _dateOfBirth(){
  let dateOfBirth = (prompt('please use this format, dd/mm/yyyy: '));
  let replaceDate = parseInt(dateOfBirth.replace(/[/]/g, ''))
  let charc = '/'; 
  if(dateOfBirth === " "){
    
    console.log('Invalid Input');
    cont();
  }else if(dateOfBirth.length > 10){
    console.log('Invalid Input');
    cont();
  }else if(!isNaN(dateOfBirth)){
    console.log('Invalid Input');
    cont();
  }
  else if(dateOfBirth.length == 10 && dateOfBirth.includes(charc)){
    newStudent.dateOfBirth = replaceDate;
    
  }else{
    console.log(`Invalid Input`);
    cont();
  }
 

  function cont(){
    let num = parseInt(prompt(`Type 1 to repeat the process, type 2 to exit: `))

    if(num === 1){
      console.clear();
      _dateOfBirth();
    }else if(num === 2){
      console.clear();
      console.log(`Thank you for visiting`);
    }
      else{
      console.log("Please type a valid number")
     cont();
    }
  }
} 

// let acctNum = Math.floor(Math.random() * 6061998) //if birthday starts with zero, use splice to remove it, use this in student ID
// console.log(acctNum)
function _userName(){
  let randomNum = Math.floor(1000 + Math.random() * 9000);
  let studentUserName = newStudent.firstName + randomNum;

  newStudent.userName = studentUserName;


}

function _userId(){
  let randomNum = (Math.floor(newStudent.phoneNumber / Math.random() * newStudent.dateOfBirth)).toString();
let studentID = 'ID' + randomNum.substring(3, 9);

newStudent.userID = studentID;

}

function _signUp(){
  console.clear();

  _firstName()
  _middleName()
  _lastName()
  _dateOfBirth()
  _phoneNum();
  _userName()
  _userId()
  _email()
  gender();
  _homeAddress()
  _password();

  console.clear()
  console.log(`
  Confirm your details below:
  First name: ${newStudent.firstName}
  Middle name: ${newStudent.middleName}
  Last name: ${newStudent.lastName}
  Date of birth: ${newStudent.dateOfBirth}
  Phone number: ${newStudent.phoneNumber}
  User name: ${newStudent.userName}
  UserID: ${newStudent.userID}
  Email Address: ${newStudent.emailAddress}
  Gender: ${newStudent.gender}
  Home Address: ${newStudent.homeAddress}
  Password: ${newStudent.password}
  `)
}
_signUp();



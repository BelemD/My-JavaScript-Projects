const prompt = require("prompt-sync")({sigint:true});
//const { sign } = require("crypto");
const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('atmData.json', 'utf8'))
 
fs.writeFileSync("output.pdf", JSON.stringify(userData))


let user = {
  fullName: "",
  userName: "",
  userPin: "",
  email: "",
  phoneNum: "",
  userAddress: "",
  dateOfBirth: "",
  acctBalance: 0,
  isLoggedIn: false,
  acctNumber: "" 
};

let userInput;


function Select() {

  console.clear(); 
  console.log('WELCOME TO UNITY BANK\n To Register type 1\n To Login type 2');
  userInput = parseFloat(prompt());

  switch (userInput) {
    case 1:
      signIn()
      break;
  
    case 2:
      login();
 
      break;
    default:
      console.log('Wrong Value');
      Select();
      break;
  } 
}

function options(){
  console.clear();
  console.log(`Please pick an Option below`)
  console.log('\nTo Transfer type 1 \nTo Deposit type 2 \nTo Withdraw type 3 \nFor TopUp type 4\nTo Check Balance type 5\nTo buy data for a friend type 6\nTo Logout type 0');
  userInput = parseFloat(prompt(''));
  if(userInput === 1){
    Transfer();
    
  }else if(userInput === 2){
    Deposit();
    
  }else if(userInput === 3){
    withdrawal();
   
  }else if(userInput === 4){
    TopUp();

  }else if(userInput === 5){
    acctBalance();

  }else if(userInput === 6){
    buyForAFriend();
  }else if(userInput === 0){
    logOut();
  }
  else{
    console.log('Pick the right number');

  }
}

function _userName(){
  let userName = prompt('');
  if(userName == "" && isNaN(userName)){
    console.log(`This field should not be empty neither should it have numbers`);
  }else{
    user.userName = userName;
  }
  
}

function _userPin(){
  let userPin = prompt();
 

  if(isNaN(userPin) && userPin == " " ){
    console.log('Incorrect password, please try again');
    _userPin();
  } else if(userPin.length > 4){
    console.log('Input four digit password');
  }
  else{
    user.userPin = userPin; 
  }
 
}
//Account number generation
//let acctNum = Math.floor(Math.random() * Math.pow)
function _userAddress(){

  let userAddress = prompt('');
 
  if(userAddress === " "){
    console.log('Please try again');
    _userAddress();
  }else{
    user.userAddress = userAddress;
  
  }
     
}
function _dateOfBirth(){
  let dateOfBirth = prompt('');
  
  if(dateOfBirth === " "){
    
    console.log('Please try again');
    _dateOfBirth();
  }else{
    user.dateOfBirth = dateOfBirth;
  }
 
}

function _email(){
  console.log(`Please input your email address: `);
  let email = prompt();
 let char1 = '@';  let char2 = '.com';
  if(email === " " && isNaN(email)){
    console.log('Please try again');
    _email();
  }else if(!email.includes(char1) && !email.includes(char2)){
    console.log(`Invalid Email, please try again`)
    _email();
  }
  else{
    user.email = email;
  }
}
function _phoneNum(){
  let phoneNum = prompt();

  if(phoneNum.length > 11 && phoneNum === ' ' && !isNaN(phoneNum) && phoneNum.length < 11){
   
    console.log('Please input the correct phone number');
    _phoneNum();
  }else{
    user.phoneNum = phoneNum;
  }

}
function _fullName(){
  let fullName = prompt('');

  if(fullName === " " && !isNaN(fullName)){
    console.log('Please try again');
    _fullName();
  }else{
    user.fullName = fullName;
  }

}
//Sign in function
function signIn(){
  console.log();
  console.log('Please input your username');
  _userName();

  console.log('Please input your full name');
  _fullName();

  console.log('Please input your four digit pin');
 _userPin();

  console.log('Please input your Address');
  _userAddress();

  console.log('Please input your Date of birth');
  _dateOfBirth();

  _email();

  console.log('Please input your Phone number');
  _phoneNum();

  console.log('Welcome ' + user.userName);
 
  confirmData();
  options();
}

let confirmData = () => {
  console.log(
  `Name: ${user.fullName}
   Username: ${user.userName}
   Pin: ${user.userPin}
   Email: ${user.email}
   Phone Number: ${user.phoneNum}
   Address: ${user.userAddress}
   Date Of Birth: ${user.dateOfBirth}
    `);
let confirmUser = parseInt(prompt("To confirm data, type 1. To restart registration type 2\n")) ;

if(confirmUser === 1){
  userData.push(user);
  fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2));
        console.clear();
     login();
}else if(confirmUser === 2){
  console.clear();
  signIn();
} else{
  console.log(`Please input a valid number`);
  confirmData();
}
}




//Login function
function login(){
  console.clear();
  console.log('Please log in your details');
  let nameOfUser = prompt('Please input your username: ');

  let pinOfUser = prompt('Please input your Pin: ');

  const users = userData.find((users) => users.userPin === pinOfUser && users.userName === nameOfUser);
  if(users){

    users.isLoggedIn = true;
    console.clear();
      console.log('WELCOME ' + users.fullName);
      options();
  }else{
    console.clear()
    console.log(`Invalid Username or Password
    To change Password type 1
    To Sign in or to Login type 2
    `);
    let input = parseInt(prompt(''))
    switch (input) {
      case 1:
        changePassword();
        break;
        case 2:
        Select();
        break;
      default:
        break;
    }
  }
}

let logOut = () => {
let users = userData.find(users => users.isLoggedIn);
if(user){
userData.push(users.isLoggedIn = false);
fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2));
console.log(`Thank you for banking with us`)
}
}


function Deposit() {
  console.clear();
  console.log('-------DEPOSIT------');
  const users = userData.find(users => users.isLoggedIn);
  
  if(users){
    let amount = parseInt(prompt('Please input the amount to deposit: '));
   
    let checkAmount = () => {
      if(isNaN(amount) === true){
        console.log(`Invalid Input`);
        contiNue();
      }else if(amount <= 0){
        console.log('Invalid Input');
        contiNue();
      }else{
        userData.push(users.acctBalance += amount)
        fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2));
        console.log(`You have successfully made a deposit of #${amount}`);
        contiNue();
      }
    }
    checkAmount();
  }
    function contiNue(){
    let num = parseInt(prompt(`Type 1 to make another deposit, for all options type 2, to Logout type 3: `))
    if(num === 1){
      console.clear();
      Deposit();
    }else if(num === 2){
      console.clear();
      options();
    }else if(num === 3){
      console.clear();
      logOut();
      }
      else{
      console.log("Please type a valid number")
     contiNue();
    }
  }
}

function Transfer(){
  console.clear();
  console.log("---------- TRANSER -----------");
  const users = userData.find((users) => users.isLoggedIn);
  if (users) {
    let amount = parseFloat(prompt('Please input the amount to transfer: '));
  
    let checkAmount = () => {
    if(isNaN(amount)){
      console.log( `Invalid Input`)
      contiNue();
    }else if(users.acctBalance < amount){
      console.log( `Insuffient fund`)
      contiNue();
    }else{
      let input = prompt(`Input Recipient username: `)
      const checkInput = userData.find( checkInput => checkInput.userName === input && !checkInput.isLoggedIn);

      if(checkInput){
        //console.log(` User ${checkInput.fullName} found`);
        
        let checkTransDetails = () => {
          console.clear();
          console.log("---------CONFIRM TRANSFER---------");
          console.log(`Transaction Type: Inter-User`);
          console.log(`Source Name: ${users.fullName}
          Recipient Account number: ${checkInput.fullName} 
          `)
          console.log(`Transaction Amount ${amount}`)

          let finalTransaction = parseInt(prompt(`Type 1 to confirm transaction \n Type 2 to cancel: `))

            if(finalTransaction === 1){
             let retry = true;
             let failure = 0;
              while(retry){
                let pin = prompt("Please enter your password: ")
               if(users.userPin == pin){
                  userData.push(users.acctBalance -= amount)
                  userData.push(checkInput.acctBalance += amount)

                  fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2));
                 console.log(`Your transaction was successful ${amount} to ${checkInput.fullName}`)
                 contiNue();
                 break;
                 }else{
                 failure++
                 if(failure <= 2){
                 console.log(`
                 Incorrect Password, You will be logged out after 3 failed attempts 
                 You have ${3 - failure} attempts`);
                  retry = true;
                }else{
                 console.log(`Maximum attempt reached`)
                 contiNue();
                 break;
                }
               
              }
            }

         }else if(finalTransaction === 2){
          contiNue();
          }else{
          console.log( `Please enter a valid number`)
          false;
          }
        
        }
        checkTransDetails();
      }
      }
    }
    checkAmount();
  }
  }
  
  let contiNue =() => {
    let num = parseInt(prompt(`Type 1 to make another transfer, for all options type 2, to Logout type 3: `))
  if(num === 1){
    console.clear();
    Transfer();
  }else if(num === 2){
    console.clear();
    options();
  }else if(num === 3){
  console.clear();
  logOut();
  }else{
    console.log("Please type a valid number")
    contiNue();
  }
  
}


function withdrawal() {
  let users = userData.find(users => users.isLoggedIn);
  if(users){
    let amount = prompt('Please input the amount to Withdraw: ')

    let checkBalance=() => {
      if(isNaN(amount) === true){
        console.log(`Input a valid amount`)
        contiNue();
      
      }else if(users.acctBalance < amount)  {
        console.log(`Insufficient Fund`)
        contiNue();
      }else if(amount <= 0){
        console.log(`Invalid amount`)
        contiNue();
      }
      else{
        let retry = true;
        let attempts = 0;
        while(retry){
          let pin = prompt(`Input you four digit pin: `)

          if(users.userPin === pin){
            userData.push(users.acctBalance -= amount)
            fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2));

          console.log(`Withdrawal Successful`)
          contiNue();
          break;
          }
      else{
        attempts++
        if(attempts <= 2){
          console.log(`Incorrect Pin, you will be logged out after ${3 - attempts}`)
          retry = true;
        }else{
          console.log(`Maximum attempt reached`)
          quit();
          break;
        }
      }
        }
      }
    }
    checkBalance();

  }else{
    console.log(`Please Signin or Login`)
    Select();
  }
  function contiNue(){
    let num = parseInt(prompt(`Type 1 to make another deposit, for all options type 2, to logout type 3`))
  if(num === 1){
    console.clear();
    withdrawal();
  }else if(num === 2){
    console.clear();
    options();
  }else if(num === 3){
    console.clear();
    logOut();
  }else{
    console.log("Please type a valid number")
    contiNue();
  }
  }
}

function acctBalance(){
 let users = userData.find(users => users.isLoggedIn);

 if(users){
   console.log(`${users.fullName} your account balance is ${users.acctBalance}`)
  contiNue();
  }
function contiNue(){
  let num = parseInt(prompt(`Type 1 for all options type, to logout type 2: `))
if(num === 1){
  console.clear();
  options();
}else if(num === 2){
  console.clear();
  logOut();
}else{
  console.log("Please type a valid number")
  contiNue();
}
}
}

function TopUp() {
  console.clear();
  console.log('For GLO type 1\nFor MTN type 2\nFor AIRTEL type 3');
  userInput = parseFloat(prompt());

  switch (userInput) {
    case 1:
      glo()
      break;
    case 2:
      mtn();
      break;
      case 3:
        airtel();
        break;
    default:
      console.log('Wrong Value');
      options();
      break;
  } 
}
let glo = () => {
  topFunc();
}
let mtn = () => {
  topFunc();
}
let airtel = () => {
  topFunc();
}
let topFunc = () => {
  console.clear();
  console.log('For Data dail *131# \nFor Airtime dail *132#');
    let users = userData.find(users => users.isLoggedIn)
     if(users){
      let data = prompt('');
      if(data === '*131#'){
        let amount = parseFloat(prompt('Please input the amount: '));
        userData.push(users.acctBalance -= amount);
        fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2))

        console.log(`You've Successfully bought ${amount} worth of data`)
        contiNue();
      } else if(data === '*132#'){
    
        let amount = parseFloat(prompt('Please input the amount: '));
        userData.push(users.acctBalance -= amount);
        fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2))

        console.log(`You've Successfully bought ${amount} worth of Airtime`)
        contiNue();
      }else{
        console.log('Wrong code');
      }
    }
    function contiNue(){
      let num = parseInt(prompt(`Type 1 to make another transaction, to Logout type 2 `))
      if(num === 1){
        console.clear();
        options();
      }else if(num === 2){
        console.clear();
        logOut();
      }
        else{
        console.log("Please type a valid number")
       contiNue();
      }
 }

}

let changePassword = () => {
  console.clear();
  let email = prompt('Please input your Email Address: ');

  let users = userData.find(users => users.email === email)
  if(users){
    users.isLoggedIn = true;
    let pinOfUser = prompt('Please input your Pin: ');
    let confirmPin = prompt('Confirm your pin: ')
    
    if(pinOfUser === confirmPin){
      users.userPin = confirmPin
      userData.push(users.userPin);
      fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2))

      console.log(`You've Successfully changed your password`)
      let input = parseInt(prompt(`
        To Login type 1 
        To LogOut type 2
         `))
      switch (input) {
        case 1:
          login();
          break;
      
          case 2:
          logOut();
          break;
        default:
          console.log(`Please type a correct number`)
          break;
      }
    }else{
      console.log(`Please retry`)
      changePassword();
    }
  }
}

//Buy airtime for a friend
function buyForAFriend(){
  console.clear();
  console.log(`-------BUY FOR A FRIEND-------`)
  
  const users = userData.find(users => users.isLoggedIn)
if(users){
  let amount = parseInt(prompt(`Put an amount: `))

      if(isNaN(amount) === true){
        console.log(`Invalid Input`)
        contiNue();
      }else if(amount <= 0){
        console.log(`Invalid Input`)
        contiNue();
      }else if(users.acctBalance < amount){
        console.log(`Insuffient Fund`)
        contiNue();
      }else{

        let friendNum = (prompt(`Input a friend's contact: `))
        const checkFriend = userData.find(checkFriend => checkFriend.phoneNum === friendNum)

        if(checkFriend){
         
          let friendTransaction =() =>{
            console.clear();
            console.log("---------CONFIRM TRANSACTION---------");
            console.log(`
            Source Name: ${users.fullName}
            Recipient Phone number: ${checkFriend.phoneNum} 
            `)
            let confirmPin = (prompt(`Please Input your Pin: `))
            if(confirmPin === users.userPin){

              userData.push(users.acctBalance -= amount);
              userData.push(checkFriend.acctBalance += amount);
              fs.writeFileSync("atmData.json", JSON.stringify(userData, null, 2))
              console.log(`You have successfully bought ${amount} worth data for ${checkFriend.phoneNum}`)
           
              contiNue();
            }
            
          }
          friendTransaction();
         
        }
        
      }
      
    }
    function contiNue(){
      let num = parseInt(prompt(`Type 1 to make another transaction, to Logout type 2: `))
    if(num === 1){
      console.clear();
      options();
    }else if(num === 2){
      console.clear();
      logOut();
    }else{
      console.log("Please type a valid number")
      contiNue();
    }
    }
}



// fs.readFile('output.txt','utf8', (err, data) => {

//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const f = require('fs');
// const readline = require('readline');
// var user_file = './output.txt';
// var theLine = readline.createInterface({
//     input : f.createReadStream(user_file)
// });
// theLine.on('line', function (text) {
// //console.log(text[3,1]);
// });

// var array = fs.readFileSync('output.txt').toString().split("\n");


//   console.log(array[1]);

Select();

 



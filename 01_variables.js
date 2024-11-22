const account_ID = 3344; // asigned only once
let account_emamil="rohitp@gmail.com"//moderm way to assign the variable
var AccountPass="12345"// old way to assign varible in which it have scope problem(block scope and functional scope)
accountCity="jaipur"
let accountState;

// account_ID=2;
console.log(account_ID);

account_emamil="vgdf@gmail.com"
AccountPass=55555
accountCity="aurangabad"


console.table([account_ID,account_emamil,AccountPass,accountCity,accountState])
// objects
//  singleton


//  symbol decleration

const sym= Symbol("key1")

// object literals
const juser={
    name:"Aditya",
    "full name": "Rohan Roy",
    [sym]:"key12",
    age:22,
    location:'indore',
    email:"rohitCeo@google.com",
    islogged:false,
    lastlogin:["mon","tue","wed","thurs","fri","sat"]
}

// console.log(juser.email);
// console.log(juser["email"]);
// console.log(juser["full name"]);
// console.log(juser[sym]);

juser.email ="ROhanz@employ.com";
// Object.freeze(juser)
juser.email ="ROhanz@admin.com";

// console.log(juser);

juser.greeting= function () {
    console.log("hi welcome juser.greeting function");
}

juser.greeting1 = function () {
    console.log(`hi welcome juser.greeting function ,${this.name}`);
}

console.log(juser.greeting)
console.log(juser.greeting())
console.log(juser.greeting1())

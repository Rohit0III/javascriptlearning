const name ="rohan "   //(outdated syntax for concatination)
const repocount = 50
// console.log(name +repocount + " return to you");

//  updated syntax for concatination

// string interpolation
console.log(`hello ${name} and ${repocount}`);

//new way declare string
const na = {
    na1:"roh-an",
    age:50,
}

console.log(na.na1[2]);
console.log(na.na1.toUpperCase());
console.log(na.na1.__proto__);
console.log(na.na1.charAt(3).toUpperCase());
console.log(na.na1.indexOf('r'));



const namee =na.na1.substring(0,3)
console.log(na.na1.includes('ro'))


const url = "https://rohan.com/rohan%30joshi"

console.log(url.replace('%30','-'));
console.log(url.includes('rohan'));


console.log(na.na1.split("-"));



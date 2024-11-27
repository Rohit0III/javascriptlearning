
function greet() {
    console.log("h");
    console.log("i");
}


// greet (refrence)

// greet() //(execution)

// function add(n1,n2) {
//     console.log(n1+n2);   
// }


const result = add(5,4)
function add(n1,n2) {
    let result =n1+n2
    return result; 
}

// console.log(result)

function loginmesaage(username ="sam") {
    if ( !username) {
       return console.log("write a user name")   
    }
    return`${username} just logged`
}


// const re =loginmesaage()
// console.log(re);




function price(){
    
}
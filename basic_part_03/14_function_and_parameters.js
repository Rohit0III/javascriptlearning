
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

const us={
    uname:"Rohannn",
    price:4453
}


function handleobject(anyobject)
 {
   console.log(`HI CHEFI ${anyobject.uname} your balance ${anyobject.price} `);
}

// handleobject(us)
handleobject({
    uname:"Shubh",
    price:"2.2 decilion"
})


const n_arr= [222,333,555]

function retrunsecondvalue(anyarray) {

    return anyarray[1]
}

// console.log(retrunsecondvalue(n_arr));
console.log(retrunsecondvalue([333,444,55,33]));

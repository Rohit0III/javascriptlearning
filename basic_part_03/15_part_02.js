//  nested scope

function one() {
    const uname= "rohan"
    
    function two() {
        const web="ytube"
        console.log(uname);
    }
    // console.log(web);
    two()
}

// one()


if (true) {

    const usname= "rh"
    if(usname == "rh"){
        const wes=" twit"
        // console.log(usname + wes);
        
    }
    // console.log(wes);
    
    
}
// console.log(usname);



// ===============================================================
 console.log(   add1(5));

function add1(num) {
    return num+1
    
}


console.log(add2(5));

const add2= function add2(val) {
    return val+2
}


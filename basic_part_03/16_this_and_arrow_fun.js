const user={
    uname:"rohan",
    price:99,

    welcomeMessage:function () {
        console.log(`${this.uname},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.uname="Rushi"

// user.welcomeMessage()

// console.log(this);

// function cah(){                     //this can be used in object
//     let unamee="rhhhh"
//     console.log(this.unamee);
    
// }
// cah()


// const  ch =function () {
//     let u="fkjf"
//     console.log(this.u);
    
    
// }
// ch()


const  ch = () => {
    let u="rohan"
    console.log(this.u); 
}
// ch()


// arrow function
//  const a2= (n1,n2) => {
//     return n1+n2

// }


//implicit return of arrow function
// const a2= (n1,n2) => n1+n2
// const a2= (n1,n2) => (n1+n2)
const a2= (n1,n2) => ({unm:"rohan"})

console.log(a2(1,4))


const a=[1,2,3,4,5]
// a.forEach()
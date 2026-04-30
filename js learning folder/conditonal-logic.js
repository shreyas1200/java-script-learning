

//letts store user name // 

const username ="Shreyas"

if (username === "admin"){
    console.log("welcome admin")
} else {console.log ( "acess denied ")}


// writing cart logic//

let cartTotal = 600

if (cartTotal >= 1000){
    console.log("free delivery")
} else if (cartTotal >= 500 && cartTotal < 1000){
    console.log("delivery charge ₹50")
} else {
    console.log("delivery charge ₹100")
}
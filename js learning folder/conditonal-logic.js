

// //letts store user name // 

// // const username ="Shreyas"

// // if (username === "admin"){
// //     console.log("welcome admin")
// // } else {console.log ( "acess denied ")}


// // // writing cart logic//

// // let cartTotal = 600

// // if (cartTotal >= 1000){
// //     console.log("free delivery")
// // } else if (cartTotal >= 500 && cartTotal < 1000){
// //     console.log("delivery charge ₹50")
// // } else {
// //     console.log("delivery charge ₹100")
// // }

// // practice problems //

// // create a variable to store the user name as adimin 

// // const userName ="admin"

// // if(userName === "admin") {
// //     console.log("welcome admin")
// // } else {
// //     console.log("access denied")
// // }


// // //  problem 2 shop delivery charges logic //

// // let cartTotal = 700

// // if (cartTotal >=1000 ) {
// //     console.log("free delivery")
// // } else if ( cartTotal>=500) {console.log("delivery charge ₹50")}

// // else {console.log("delivery charge ₹100")}


// // // problem 3 check age for ticket price //

// // const userAge = 60

// // if (userAge >= 60) {console.log("ticket price ₹100")}

// // else if (userAge >= 18) {console.log("ticket price ₹200")}

// // else {console.log("ticket price ₹50")}

// // home work conditonal logic//

// // create variables to store first name , last name , age , city , premium memeber //

// const firstName = "shreyas"
// const lastName = "r"
// const userAge = 16
// const premiumMember = true
// const city = "bengaluru"

// //lets create a variable to store the full name //

// const fullName = firstName + " " + lastName



// // create a variables to store diffrent items with prices //

// const [ product1, product2, product3 ] = [600,800,1900]

// //create a subtotal variable that calculates the total price//

// const subtotal = product1 + product2 + product3


// // create logoc for checkin age and if they can buy or noy//

// let canShop;

// if (userAge < 18) {
//     canShop = false
//     console.log("Sorry, you must be 18 or older to shop",canShop )
// } else if (userAge>=18) {
//     canShop = true
//     console.log("can shop" ,canShop)
// }

// //create a variable dicoutn logic for premium members //

// let discount;
// let shopMessage;

// if (premiumMember === true) {discount=25 
//     shopMessage = "you get 25% off your purchase"} 

// else {discount = 10
//     shopMessage = "you get 10% off your purchase"
// }


// // let us store the discount amount in variale now //

// const discountAmount =(subtotal * discount) /100
// // creart a variable to store the total price aftert dicount//

// const totalPrice = subtotal-discountAmount



// //create a variable to store the delivery fee logic //

// let deliveryFee;

// if (subtotal >= 2000) { deliveryFee = 0
//     console.log("you get free delivery", deliveryFee)
// }

// else if (subtotal >=1000){ deliveryFee = 100
//     console.log("delivery charge ₹100" , deliveryFee0) }

//     else {deliveryFee = 200
//         console.log("delivery charge ₹200", deliveryFee)
//     }


// //LET US CREATE A VARIABLE TO STORE THE FINAL PRICE AFTER DICOUNT AND DELIVERY Fee//


// const finalPrice = totalPrice + deliveryFee

// // lets print all the details in console //

// console.log("User name:", fullName.toUpperCase())

// console.log("city:",city.toUpperCase())

// console.log("canshop:",canShop)

// console.log("subtotal:",subtotal)

// console.log("Discount:", shopMessage)

// console.log("delivery Fee", deliveryFee)

// console.log("finale Price:" ,finalPrice)


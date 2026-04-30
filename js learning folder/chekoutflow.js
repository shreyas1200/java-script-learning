






// 






//lets create a complete checkout flow //

//lets create 2 variables to collect the customer data //

const firstName = "shreyas"
const lastName = "r"
const userAge = 22
const premiumMember = true
const city = "bengaluru"

const fullName = firstName + " " +lastName



//check if customer is adult or not //

const isAdult = userAge >=18

//check if customer namer has more that 5 characters //

const nameLength = fullName.length > 5

//lets create the cart which holds products let create a arrat variable //

const [ product1, product2, product3 ] = [600,800,1900]

const subtotal = product1 + product2 + product3



// let us create the dicount logic for premium customers they get 20% off //

const discountPercentage = 20

const discount = (subtotal * discountPercentage) /100 

const totalPrice = subtotal - discount

//delivery fee//

const deliveryFee = 80

// create a variabel to store the final price after adding the delivery fee and the dicoutned price //
const finalAmount = totalPrice + deliveryFee




console.log("username", fullName.toUpperCase())

console.log("is adult", isAdult)

console.log ("full name valid:" + nameLength)

console.log("city:",city.toUpperCase())

console.log("subtotal:",subtotal)

if (premiumMember == true){ console.log("20% discount applied")}
else {console.log("10% discount applied")}

console.log("discount applied",discount)

console.log("delivery fee",deliveryFee)

console.log( "final amount:",finalAmount)


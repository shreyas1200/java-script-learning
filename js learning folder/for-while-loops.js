

for (let i = 1; i <= 3; i++) {
    console.log("Order placed!")
}


for (let i = 1; i <= 5; i++) {
    console.log("Welcome user " + i)
}

// create a loop to print processing order 4 times//

for (let i =1; i <=4 ; i++) { 
    console.log ("processing order " + i)
}


//create a loop to print the numbers from 1 to 10 //

for ( let i = 1; i<=10 ; i++){

    console.log( i )
}

//create a loop to print thank you customers for the 5 custoemrs //

for (let i = 1; i <=5 ; i++){
    console.log( "Thank you customer:",i)
}

// while loop learning //

let stock = 3

while (  stock >= 0 ) { 
    console.log("items sold stock remaining:", stock)

    stock--
}


// create a while loop to check the login attemtpts //

let logiAttempts = 3

while (logiAttempts > 0){

    console.log("login attempt:",logiAttempts)

    logiAttempts--

    if (logiAttempts === 0){

        console.log("attempts exahusted please try again in 10minutes")
    }
}


// home work // 

//set up //

const shopName ="the karma store"

const city = "bangalore"

// lets create variables to store the product names , prices and stock //

const product1 = "t-shirt"

const price1 = 500

let stock1 = 20 

const product2 ="jeans"

const price2 = 1000

let stock2 = 12

const product3 = "sneakers"

const price3 = 2000

let stock3 = 8

// create a loop to print product name and price//

// const products = [product1, product2, product3]

// const prices = [price1, price2, price3]

// for (products>=0 ; products-- ) {
//     console.log (products)
// }

// creating a loop to find even numbers using while loop //

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log( i +" " + "is a even number" )
    }
}
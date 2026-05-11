

function greetCustomer( name, city){
    console.log("Hello" + " " + name + " " + "Welcome from " + city)
}

greetCustomer(" Shreyas", "Bengaluru") 


// problem 2// total of 2 products //



function calculateTotal(price1,quanity1,){

    return ( price1 * quanity1)

    
}

const totalAmount2 = calculateTotal(500,700)
console.log(totalAmount2)


//problem 3 // create a fucntion to add a dicoutn for the price //
 

 function applyDiscount(price, discountPercentage){

    const discountAmount = (price*discountPercentage)/100

    return price-discountAmount
}


const finalAmount = applyDiscount(9000,10)    
console.log(finalAmount)


// creating a function to add discount for the total price //

// create a funstion with the parameter total //

function getDiscount (total){

    if (total >= 2000){
        return (total*20)/100
    } else if (total >= 500){
        return (total*10)/100
    }else{
        return 0
    }
}

function finalAmount2(dicountedAmount){

    return dicountedAmount - getDiscount(dicountedAmount)
}

console.log("final amount after discount:" + " " + finalAmount2(400))


// type a funtion to combine the first and last name //

function NameMerge( firstname,  lastname){
    return firstname +  " " + lastname
}

const fullName = NameMerge("Shreyas","R") 

console.log("Fullname:", fullName) 

// create a funtion to check age //

function isEligible(Age){

    if(Age>=18){
        return true
    }else{ return false}
}


const User = isEligible(20)
console.log ( "User is Above 18", User)

// create a function called  cartSummary which hold a array of parameters//



// create a function that  can caluclate adn add a total of the arrays //

function CartSummary( Prices){

    let total = 0

    for ( let i = 0 ; i<Prices.length ; i++ ) {

        total= total+ Prices[i]
    } 

     return total
}

 
const totalCart =  CartSummary([200,400,600,700,800,900,1000,6000])
console.log(totalCart)

// wrtie a function that takes 2 numabers in and then gives the ouput which i can store it in a variable //

function getNumber(number1,number2){

    return(number1*number2)
}

const ValueNum = getNumber(400,300)
console.log(ValueNum)


//create a function that takes a price compares it with a number  then gives true or false //

function getNumber2 (numbercheck){

    if(numbercheck > 1000){
    return  true
    }else{return  false}
}

const checkNumber = getNumber2(10000000)
console.log(checkNumber)

// take a array of numbers and compare and give the highest number //

function numberCheck(array1){
 let largeNumber= 0

 for (let i= 0; i < array1.length ;i++){

   

    if(array1[i]>largeNumber){

         largeNumber=  array1[i]
    }

    
}

return largeNumber
}

const largestNumber= numberCheck( [5,10,15,70,90,800])
console.log(largestNumber)

//creating a  tough fucntion which take in stuff from array of objects //

// getDiscount(total, isPremium) → returns discount amount
// getFinalPrice(total, isPremium) → returns final price after discount
// getTotalRevenue(orders) → returns total revenue from delivered orders only
// getHighestOrder(orders) → returns the customer name with highest order

const orders2 = [
    { id: 1, customer: "Shreyas", items: ["Shoes", "Belt"], total: 2500, status: "delivered", isPremium: true },
    { id: 2, customer: "Raj", items: ["Tshirt"], total: 800, status: "pending", isPremium: false },
    { id: 3, customer: "Priya", items: ["Jeans", "Shoes", "Hat"], total: 3200, status: "delivered", isPremium: true },
    { id: 4, customer: "Ananya", items: ["Sneakers"], total: 450, status: "pending", isPremium: false },
    { id: 5, customer: "Rohit", items: ["Belt", "Tshirt"], total: 1800, status: "delivered", isPremium: false }
]


function getDiscount (amount, memberStatus ) { 

    if (memberStatus === true){

        return ( amount *20 )/100 // 20 percent discount//
     } else{ return(amount *10)/100}  //10 percent
}

// get total after final price .discount// 

 function getFinalPrice (amountFinal , ispremium){

    if (ispremium === true){

return  amountFinal - getDiscount(amountFinal, ispremium)
    }
    console.log(finalAmount)
 }

 // geto total value of the orders delivered// 

 function getTotalRevenue (orders,total2){
let orderTotal = 0
for(let i =0; i<orders.length;i++){
if( orders[i].status === "deliverd"){

    orderTotal = orderTotal+orders[i].total}

    
}
return orderTotal
}

let FinalDicountValue = getFinalPrice (2500,true)

console.log(FinalDicountValue)

// create a function to find the highest order and call it in a loop //

function getHighestOrders (ordersValue){

    let highestOrder=0 
    let customerHigh = ""
    for(let i=0;i<ordersValue.length;i++){
    if(ordersValue[i].total>highestOrder){
        highestOrder= ordersValue[i].total
        customerHigh =  ordersValue[i].customer
    }
    }
    return customerHigh
}



    let highestOrder2 = getHighestOrders(orders2)


console.log(highestOrder2)

// clean simple 3 function //

const products3 = [
    { name: "Shoes", price: 1500, quantity: 2 },
    { name: "Tshirt", price: 500, quantity: 3 },
    { name: "Belt", price: 300, quantity: 1 },
    { name: "Jeans", price: 2000, quantity: 2 },
    { name: "Sneakers", price: 1200, quantity: 4 }
]

// function 1 //

function GetTotalOfEachProduct ( ProductTotal , quantitty){
    return ProductTotal*quantitty
 
}

const productTotal = GetTotalOfEachProduct(1500,2)
console.log(productTotal)

// create a function to clulate the total of all the products in the object //

function allProductsTotal (allProducts){

    let total = 0 

    for(let i=0 ; i<allProducts.length;i++){

 total= total + GetTotalOfEachProduct(allProducts[i].price, allProducts[i].quantity)
        
    }

    return total
}

const totalValueOfCart = allProductsTotal(products3)
console.log(totalValueOfCart)

// write a funtion to to filete the most expensive amount // and print it 

function FilterExpensivepProduct (expensiveProduct){
    let ExpensiveProduct = 0
    let mostExpensive = ""
    
    for(let i =0 ;i<expensiveProduct.length; i++){

        if(expensiveProduct[i].price>ExpensiveProduct){

            ExpensiveProduct= expensiveProduct[i].price;
            mostExpensive = expensiveProduct[i].name}
    }

    if(ExpensiveProduct<3000){
        return ( ExpensiveProduct+ " "+ mostExpensive)
    }else{return "product above limit"}

    
}

const mostExpensive = FilterExpensivepProduct(products3)
console.log (mostExpensive)


// create a function  where i can store all the products which are above the limit in array and print all of them //

function allProducts (products4,limit) {

let allProducts = []

for ( let i = 0 ; i< products4.length ;i++){
    if(products4[i].price>limit){
    allProducts.push( products4[i].name) }
}
    return allProducts
}


const Allproducts = allProducts(products3,1000)
console.log(Allproducts) 

// creat this below function to arrow funtions //

// function getDiscount(amount, isPremium) {
//     if (isPremium === true) {
//         return (amount * 20) / 100
//     } else {
//         return (amount * 10) / 100
//     }
// }

// function allProductsTotal(allProducts) {
//     let total = 0
//     for (let i = 0; i < allProducts.length; i++) {
//         total = total + (allProducts[i].price * allProducts[i].quantity)
//     }
//     return total
// }

// function filterExpensive(products, limit) {
//     let result = []
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price > limit) {
//             result.push(products[i].name)
//         }
//     }
//     return result
// }



// const getDiscount = (amount,isPremium) => {
// if (isPremium === true) {
//         return (amount * 20) / 100
//      } else {
//          return (amount * 10) / 100
//      }
// }



// const allProductstTotal2 = (allProducts) =>{ 

// let total = 0
//     for (let i = 0; i < allProducts.length; i++) {
//          total = total + (allProducts[i].price * allProducts[i].quantity)
//      }
//      return total

// }


// const filterExpensive = (products,limit)=>{
// let result = []
//     for (let i = 0; i < products.length; i++) {
//          if (products[i].price > limit) {
//              result.push(products[i].name)
//          }
//      }
//      return result
// }

// // scoping //

// function addTax(total) {
//     let tax = 10
//     return total + tax  // doesn't touch global variable!
// }


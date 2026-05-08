const user = {
    name: "Shreyas",
    age: 22
}

user.city = "Bengaluru"
console.log(user.city)


const product = {
    name: "Shoes",
    price: 1500,
    sizes: [6, 7, 8, 9, 10]
}

console.log(product.sizes[2])
console.log(product.sizes.length)


const store = {
    name: "Shreyas Store",
    city: "Bengaluru",
    product: "Nike Shoes",
    price: 5000,
    stock: 10,
    sizes: [6, 7, 8, 9, 10],
    isPremium: true
}



console.log( "store: ",store.name)
console.log( "city: ",store.city)
console.log("product:",store.product)
console.log("price:", store.price)

// creating a dicount logic //
if(store.isPremium === true){
   let dicount20 = (store.price*20)/100

   console.log("20% discount" + " | final amount:" + (store.price-dicount20))
    
}else{let dicount10 = (store.price*10)/100

   console.log("10% discount" + " | final amount: " + ( store.price - dicount10 ))}


   //loop through the stock and sell all of them //

   while(store.stock>0){
    store.stock--
    console.log(store.stock)

    if(store.stock === 0){ console.log("out of stock:", store.stock)}
   }

// create a variable to store the sizes of the product  and loop to through it and print the total number of sizes //

for( let i=0; i<store.sizes.length; i++){
    console.log("size:" ,store.sizes[i])

}

let totalSizes = store.sizes.length
console.log("total available sizes:",totalSizes)


// arrau of loops crucial learning //

const market = [
    { name: "Shoes", price: 1500 },
    { name: "Tshirt", price: 500 },
    { name: "Belt", price: 300 }
]

for (let i = 0; i < market.length; i++) {
    console.log(market[i].name + " ₹" + market[i].price)
}

// problem solving//


const productDetails = [

    { name: "Shoes", price: 1500, stock: 10 },
    { name: "Tshirt", price: 500, stock: 0 },
    { name: "Belt", price: 300, stock: 15 } 
]


for (let i = 0; i < productDetails.length; i++) {
    console.log(productDetails[i].name + " | ₹" + productDetails[i].price + " | stock: " + productDetails[i].stock)
}

// create a loop and loop through the array and find products which have stock 0 >

for (let i = 0 ; i<productDetails.length; i++){

    if(productDetails[i].stock > 0){ console.log( productDetails[i].name + " | " + productDetails[i].stock)}
}

// create a loop and calcute the total vlaue of the stock of each product //


let totalValue =0

for (let i = 0 ; i<productDetails.length;i++){

   totalValue = totalValue + (productDetails[i].price * productDetails[i].stock)
}

console.log(totalValue)

// home work // 

const studentsNew =[
    { name: "Shreyas", score: 85, city: "Bengaluru" },
    {name:"rohit", score:78, city:"mumbai"},
    {name:"sneha", score:92, city:"delhi"},
    {name:"ananya", score:88, city:"kolkata"},
]

for (let i = 0; i< studentsNew.length ; i++){

    console.log(studentsNew[i].name + " | " + studentsNew[i].score +  " | " + studentsNew[i].city)

    
}


// print students above 70//

// Loop 2 — print only students above 70
for (let i = 0; i < studentsNew.length; i++) {
    if (studentsNew[i].score >= 70) {
        console.log(studentsNew[i].name + " | " + studentsNew[i].score)
    }
}

// create a loop and find the highest score of the students //

let highest = 0

for( let i = 0; i< studentsNew.length;i++){

    
  if(studentsNew[i].score>highest){

    highest = studentsNew[i].score
  }  


}

console.log(highest) 

// find how many times was bagalore printed in the array of object //

let bangaluruPrintes = 0

for(let i = 0 ; i<studentsNew.length ; i++) {

    if(studentsNew[i].city === "Bengaluru"){

        bangaluruPrintes++
    }
}

console.log(bangaluruPrintes)






//  problem 2 //

const orders = [
    { id: 1, customer: "Shreyas", items: ["Shoes", "Belt"], total: 2500, status: "delivered", isPremium: true },
    { id: 2, customer: "Raj", items: ["Tshirt"], total: 800, status: "pending", isPremium: false },
    { id: 3, customer: "Priya", items: ["Jeans", "Shoes", "Hat"], total: 3200, status: "delivered", isPremium: true },
    { id: 4, customer: "Ananya", items: ["Sneakers"], total: 450, status: "pending", isPremium: false },
    { id: 5, customer: "Rohit", items: ["Belt", "Tshirt"], total: 1800, status: "delivered", isPremium: false }
]

// find all the orders with their item count //

for (let i = 0 ; i<orders.length;i++){

    console.log(orders[i].customer + " | items: " + orders[i].items.length)
}

// check if the customer is premium and they have a delivered product ]

for(let i =0 ; i< orders.length;i++){

    if(orders[i].isPremium=== true && orders[i].status === "delivered") {

        console.log( orders[i].id +" | " + orders[i].customer +   " | " + orders[i].status)}
}

// create a loop and then calcualte the totatl of all the dlivered orders //
let totalAmount= 0


for(let i =0 ; i< orders.length;i++){

    if(orders[i].status==="delivered"){

       totalAmount= totalAmount + orders[i].total 
    }
}

console.log("total amount: " , totalAmount)

// compare the highest total order and print it //

let highestValue = 0 

for(let i =0 ; i< orders.length;i++){

   if( orders[i].total > highestValue ){

    highestValue = orders[i].total
   }
   
}

console.log(highestValue)

// create a loop to find the total number of items sold //

let totalItems = 0

for(let i =0 ; i< orders.length;i++){

    totalItems = totalItems + orders[i].items.length
}

console.log("total items sold: ", totalItems)   


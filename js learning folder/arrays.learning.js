// const products = ["Shoes", "Tshirt", "Belt"]
// console.log(products[1])
// console.log(products[2])
// console.log(products[3])




// const products = ["Shoes", "Tshirt", "Belt"]
// const prices = [1500, 500, 300]

// for (let i = 0; i < products.length; i++) {
//     console.log("Product: " + products[i] + " Price: ₹" + prices[i])
// }



// const cities = [ "bangalore","mumbai","shrinagar","kashmir"]

// for( let i = 0 ; i < cities.length ; i++){

//     console.log("city", cities[i])
// }

// // create a array of prices //

// const prices = [1500, 500, 300, 2000, 800]

// // create a loop to print all the prices]

// for (let i=0; i <prices.length ; i++){
//     console.log("₹" + prices[i])
// }


// //create a loop which prints numbers from 1 to 5 //

// const numbers = [ 1,2,3,4,5]

// // for(let i=0 ;i< numbers.length ; i++){}

// // create a array of products and a array of prices then print both of them togethere//

// const products = ["Shoes", "Tshirt", "Belt", "Jeans", "Sneakers"]

// for( let i = 0 ; i < products.length ; i++) {

//     console.log( "product"+  (i + 1) + " " + products[i] + " " +  "price" + " " + prices[i])
// }

// create a loop for tracking stock quantites and printing out of stock //

//  const products = ["Shoes", "Tshirt", "Belt"]

//  const inventory =[ 200, 4 , 0]

//  for(let i=0; i<products.length ;i++){

//     if(inventory[i] === 0){console.log("out of stock")
//  } else if (inventory[i] <=5){console.log("lowstock")}
// else  {console.log("in stock ")} 

// console.log(products[i])
//  }


//  // finding the highes score // 

//  const scores = [ 60,100,50,102,108]


// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//         highestScore = scores[i]  // inside - update here
//     }
// }

// console.log(highestScore)   // outside - print after loop finishes


 const products = ["Nike shoes", "Adidas shoes", "Puma shoes", "Asics shoes", "Sketchers shoes"]
const prices = [6500, 3400, 4000, 4500, 2000]

let total = 0

for (let i = 0; i < products.length; i++) {
    console.log(products[i] + " ₹" + prices[i])
    total = total + prices[i]
}

console.log("Total: ₹" + total) 

const discount20 = (total * 20) / 100

const discount10 = (total * 10) / 100

if (total >=10000){
console.log("you get 20% off your purchase" + " ₹" + (total - discount20))
} else if (total >=5000) {
    console.log("you get 10% off your purchase" + " ₹" + (total - discount10))
}else {console.log("no discount applied" + " ₹" + total)}


// create a loop to and print the students name and thier scores then assign grades to the student then  find out how many students passed ans print the total number of students passed //


// create arrays to store students names and scores //

const students = ["Alice", "Bob", "Charlie", "David", "Eve"]
const scores = [85, 72, 90, 60, 45]

let passedCount = 0

for(let i = 0 ; i<students.length;i++){
    console.log("student name: "+ students[i] + " | score: " + scores[i])

    // lets create a if else statement to print the grades //

    if(scores[i] >=90){console.log("A")}
    else if ( scores[i]>=75){console.log("B")}
    else if (scores[i]>=60){console.log("c")}
    else{console.log("F")}

   if(scores[i]>=60){ passedCount++}


    
}

console.log("total students passed:" + passedCount)



 
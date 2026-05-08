

function greetCustomer( name, city){
    console.log("Hello" + " " + name + " " + "Welcome from " + city)
}

greetCustomer(" Shreyas", "Bengaluru") 


// problem 2// total of 2 products //



function calculateTotal(price1,quanity1,){

    return ( price1 * quanity1)

    
}

const totalAmount2 = calculateTotal(500,2)
console.log(totalAmount2)


//problem 3 // create a fucntion to add a dicoutn for the price //
 

 function applyDiscount(price, discountPercentage){

    const discountAmount = (price*discountPercentage)/100

    return price-discountAmount
}


const finalAmount = applyDiscount(9000,10)    
console.log(finalAmount)
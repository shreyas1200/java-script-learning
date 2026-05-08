

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



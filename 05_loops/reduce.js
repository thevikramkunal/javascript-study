//react most use 
// reduce ka use hm ecommerce site mai add to cart karne mai kam aata hai
const myNum =[ 1,2,3,4,5,6,7,8,9]
// function
/*
const mytotal= myNum.reduce(function binod ( acc, currval){
    console.log(`acc:${acc} and  currval: ${currval}`);
    // scop { } bana h to return karega value
    return acc+currval
},0)
console.log(mytotal);*/
// arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
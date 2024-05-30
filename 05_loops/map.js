const  myNumbers =[1,2,3,45,6,7,8,9,10]
const newNums=myNumbers
                   .map(  (num) => num * 10)
                   .map( (num) => num + 1)
                   .filter( (num) => num>= 450.6)

console.log(newNums); 

const score= 400
console.log(score);
const balance= new Number(1000)
console.log(balance);
//number chnage into string
console.log(balance.toString().length);
//in the fixed after(.) number of number
console.log(balance.toFixed(4));
// Expected output:

// precision
const othername= 123.54678
console.log(othername.toPrecision(3));
// Expected output: 124     roundoff value


// number sparete in indian form
const hundreds=100000000000
console.log(hundreds.toLocaleString('en-IN'));

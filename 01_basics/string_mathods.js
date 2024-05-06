const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, -1));

//
const str = 'vikram';

console.log(str.substring(0, 4));
// methods
const greeting = '   Hello world!   ';

console.log(greeting);
console.log(greeting.trim());


//// replace
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
//Expected output: "I think Ruth's ferret is cuter than your dog!"



// includes
const array1 = [1, 2, 3];
//use for search 
console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));


//split
//split mai enterkiya remove ho jaya hai 

const gameName= ("vikram__yadav") 
console.log(gameName.split('__'));
// split(separator)
// split(separator, limit);

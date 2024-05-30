//callback function 
// // esss function ka name nahi difine hota hahi direct val, key, item likh ke acces kar sakte hia  jese :- coding.forEach( function(boka){
//     console.log(boka); yaha boka likh ke acces kiya gaya hai 


const coding =["js", "ruby","python","cpp",]
//higher order function
// coding.forEach( function(boka){
//     console.log(boka);
//})
// arow function callback 
// coding.forEach( (item)=>{
// console.log(item);
// })

coding.forEach((item,index,arr)=>{
    console.log(index,item,arr);

})
// [{},{},{}] arr ke nader object hai 
const mycoding=[
{
    languageName: "javascript",
    languagefileNme: "js",
    myname:"vikram"
},
{
    languageName: "c programing",
    languagefileNme: "cpp",
    myname:"vikram"
},
{
    languageName: "python",
    languagefileNme: "py",
    myname:"vikram"
},
]
mycoding.forEach((item)=>{
console.log(item.languageName,item.myname);
})
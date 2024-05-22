//spred
//spread oprater ka use easy rahta hai or jada use karenge  multiple object ya multiple array ko combine karne ke liye 
/*const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"h"}
const obj3 = {...obj1,...obj2}
console.log(obj3);*/


// assing 
//  assign  ko  kam hi use karenge [line 13 {} target man lo esko onj1 obj2 ko sorce man lo
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"h"}
const obj3= Object.assign( {} ,obj1,obj2)
console.log(obj3)
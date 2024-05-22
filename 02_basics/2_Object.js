//const tinderUser =new Object()// singal tone  basics
const tinderUser={}
tinderUser.name= "vikram"
tinderUser.id= "655478ey"
tinderUser.isloggedIn=false
//console.log(tinderUser);
//other app ke liye 
const regularUser = {
   email:"vikramkumar@gamil.com",
   // nested object object ke andar object 
    userfullname: {
        fullname:{
            firstname:"vikram",
            last:"kumar"
        }

    }
} 
//console.log(regularUser.userfullname.fullname.firstname);


// o object ko combine 
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"h"}
//const obj3= Object.assign( {} ,obj1,obj2)//  assign  ko bhi kam hi use karenge {} target man lo esko onj1 obj2 ko sorce man lo
console.log(obj3);
// spread oprater ka use easy rahta hai or jada use karenge  multiple object ya multiple array ko combine karne ke liye 

const obj3 ={...obj1,...obj2}
console.log(obj3);
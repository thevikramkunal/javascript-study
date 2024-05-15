// singleton  : constructer se object banega tab singleton banega nahi to nahi banega 
//literals : object jab hm declear karenge to  literals ke form mai hota h to singleton nahi banega 
 const mysym = Symbol("key1")
 const jsuser ={
    name: "vikram",
    "full name" : "vikram kumar",
     [mysym]:"mykey1",
    age:22,
    location:"bihar",
    email:"vikram.kimar@gmail.com",
    isLoggedIn: false,
    LastloginDays:["monday", "sunday"]
    
}
console.log(jsuser.email);
//console.log(jsuser["email"]);// right way
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
// bsics
// change mail 
jsuser.email="harharmahadev@gmail.com"
jsuser.age= 66;


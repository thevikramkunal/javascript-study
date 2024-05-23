const user =
{
    username: "vikram",
    price: "999",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`); // this keyword current contactext ke liye work karata hai 

    }
}

//  user.welcomeMessage()
//  user.username="kinal"
//  user.welcomeMessage()
console.log(this);// node mai ye empty object kam karta h 
// but browser consol mai  windo
/*function orange()
{
    console.log(this);
}
orange()*/

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
console.log(regularUser.userfullname.fullname.firstname);
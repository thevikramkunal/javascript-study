const promiseOne= new Promise((resolve,reject)=>{
    // Do an async task
    // DB calls , cryptogrophy, network
    setTimeout(function(){
    console.log('asynk task is complete');
    resolve()
},1000)})
promiseOne.then(function(){
    console.log('promise consume');
})



new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("asynk task2");
        resolve()
    },1000)
}).then(()=>{
    console.log('comsume');
})


//importanat
new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        resolve({username:"chanrming", email: "charmingdev@gmail.com"})
    },1000);
}).then((username)=>{
    console.log(username);
})



//importanat
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"vikrasm",password:"324"})
        }else{
            reject("ERROR:something went wrong")}
    },1000)

}).then((user)=>{
    console.log(user);
    return user.username

}).then((user)=>{
    console.log(username);

}).catch((err)=>{
    console.log(err);

}).finally(()=>{console.log("the promise is either resilve or rejected  ");})



//important
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"javascript",password:"324"})
        }else{
            reject("ERROR:javascript went wrong")}
    },1000)

})

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

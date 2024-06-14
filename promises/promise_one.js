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
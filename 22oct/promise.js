//promise is used to remove callback hell
 let promise = new Promise((resolve, reject) => {
    let a=false;
    if(a){
        resolve("Hello, World!");
        
    }
    else{
        reject("Something went wrong");
    }
 })
.catch(promise);
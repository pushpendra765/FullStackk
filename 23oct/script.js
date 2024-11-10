// let p=new Promise((resolve,reject)=>{
//     let a=20;
//     let b=30;
//     if(a+b>55){
//         return resolve(a+b);//value
//     }else{
//         return reject("sum of a and b is less than 55");//reason
//     }

// })

// //consume
// p.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// const sum=(a,b)=>{
//     return new Promise((resolve,reject)=>{
        
//         if(a+b>55){
//             return  new Promise(()=>{
//                 console.log(a+b);
//             });//value
//         }else{
//             return reject("sum of a and b is less than 55");//reason
//         }
    
//     })
// }
// //here catch and finally can only used one time but then can be used any time
// sum(40,30).then((res)=>{
//     console.log(res);
// }).then(()=>{

// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("code  is executed");

// })

fetch("https://jsonplaceholder.typicode.com/posts")//return a promise
.then((res)=>{
    return res.json();//return one more promise
}).then((data)=>{
    console.log( data);
}).catch((err)=>{
    console.log(err);
})
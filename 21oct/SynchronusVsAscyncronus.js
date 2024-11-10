// Sycnchronus(Single thread(line by line execution)) And AsycnChronus 
// console.log("Hello world");
// function delay1sec(){
//     let curr_time=new Date().getTime();
//     let future_time=curr_time+1000;
//     while(new Date().getTime()<future_time){
//         //do nothing
//     }
// }
// delay1sec();


// function waitNsec( n){
//     for(let i=0;i<n;i++){
//         delay1sec();
//     }
// }

// let curr_time=new Date().getTime();
// let future_time=curr_time+1000;
// console.log("hi");
// waitNsec(6);
// console.log(new Date().getTime());





// Asynchronous (Non-blocking, Multi-threading, Multi-processing)
// Asynchronus functions(setTimeout,setInterval,clearInterval,promises,callback,asyn wait)
//1.setTimeout(callback function,delay)
// console.log("Hello world");
//  setTimeout(()=>{
//     console.log("insider timeout");
//  },5000);//it will run this arrow function after 5 seconds;
// console.log("hi");



//2.setInterval
// console.log("Hello world");
//  let id=setInterval(()=>{
//     console.log("insider timeout");
    
//  },5000); //arrow function will call again & again after 5 sec
//  setTimeout(()=>{
//     clearInterval(id);//to stop  the intervalof set interval


//  },15000);
// console.log("hi");

//\




//IIFE-Immediately  Invoked Function Expression
// (function IIFE(a,b){
//     console.log(`sum of ${a} and ${b} is  ${a+b}`);

// })(12,12)//IIfe function  is called immediately after it is defined

//IIFE();//normaly calling




// let percentage=(function IIFE(){
//     let marks=55;
//     function student(){
//         details();
//     }
//     function details(){
//         console.log( `percentage : ${(marks/100)*100}`);
//     }
//     return student;
// })()
// percentage();




//4.callBack()//order-fetchIngredient-preparation-delivery
function placeorder( fetchIngredient){
setTimeout(()=>{
    console.log("order placed");
    fetchIngredient( );
},2000)
 
}
function fetchIngredient(){
setTimeout(()=>{
    console.log("ingredients fetched");
    preparation();
},1000)
}
function preparation(){
    setTimeout(()=>{
        console.log("prepared");
        delivery();
    },2000)
}
function delivery(){
    setTimeout(()=>{
        console.log("delivered");
    },5000);
}
placeorder(fetchIngredient );

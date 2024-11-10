// //function statement//hoisted:-hoisted type k variable ya function hamesha run krne pr top of the code pahuch jata h apne se hi pr initialize wala part nhi aata bas declaration aata h 

// function sum(){

// }
// //function expression //not hoisted
// const sum=function(){

// }
// // arrow function // non hoisted
// const sum=()=>{

// }


//console.log(sum(1,5));
// function sum(a,b){
//    return a+b;
// }
// console.log(sum());
// console.log(sum(1,5));


// console.log(multi(4,6));
// const multi=function(a,b){
//     return a*b;
// }
// console.log(multi(4,6));


// console.log(sub(14,3));//error 
// const sub=(a,b)=>{
//     return a-b;
// }
// console.log(sub(14,3));






// console.log(age);
// var age=12;
//  temporary dead zone -----Only for hoisted functions and variables and it is gap between hoisted variable declartion that it will go top of the code and the line where the hoisted variable is declared(gap between declartion and initialization of hoisted variable or function)
//Extecution context ------provide all the ingredient to run the code (browser Engine ,Web Engine,Call stack)
//GEC=Global Execution context//only one for a file
// Fec=function exection context// may be multiple within the file
// Eval =To evaluate string  
//(creation and execution phase)








//16 oct
//Callback function=a function which can be passed as argument in another function;
// function calculator(add,sub,mul,div){  //hof(higher order function)
//     let a=20;
//     let b=5;
//     console.log(add(a,b));
//     console.log(sub(a,b));
//     console.log(mul(a,b));
//     console.log(div(a,b));
// }
// function add(a,b){   //call back function
//     return a+b;
// }
// function sub(a,b){   //call back function
//     return a-b;
// }
// function mul(a,b){   //call back function
//     return a*b;
// }
// function div(a,b){   //call back function
//     return a/b;
// }
// calculator(add,sub,mul,div);


function calculator(a,b,sign,add ,sub,mul,div ){  //hof(higher order function)
   if(sign=='+'){ 
    console.log(add(a,b));}
   if(sign=='-'){
    console.log(sub(a,b));}
   if(sign=='*'){ 
    console.log(mul(a,b));}
   if(sign=='/'){ 
    console.log(div(a,b));}
}
function add(a,b){   
    return a+b;
}
function sub(a,b){    
    return a-b;
}
function mul(a,b){    
    return a*b;
}
function div(a,b){   
    return a/b;
}
calculator(20,5,'+',add,sub,mul,div);





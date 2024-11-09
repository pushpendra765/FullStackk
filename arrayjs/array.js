// let arr=[3,3,44,5,6];
// // let arr1=arr;//yha pr address copy hoga agr ham dono m se kisi ko bhi change karenge to dono m reflect hoga
// // arr1.push("hello");
// // let ar2=arr.slice(0);// yha pr bas element copy hoga or ham kisi m kuch change krenge to vo usi m change hoga na ki dono array m 
// // ar2.push("hiiiiiiiiiiiiii");
// // console.log(ar2);
// // console.log(arr);
// let arr1=[46575,564,32,3];
// arr.push(111);
// // let ar2= [...arr,...arr1];//spread operator used to merge array make copy of array 
// // let arr3=arr.concat(arr1);
//  console.log(arr1);
// // console.log(ar2);




// object -collection of key value pair
let obj={
    name:"a",
    age:"21",
    Employee_Id:"23432",
    project:{
        projecname:"abc",
        timeRequired:10
    },
    job:function(){
        console.log("teaching");
    }
}
// console.log(obj.project.projecname);
//add in object
obj.newKey="new Value";
// console.log(obj);
// console.log(obj.job());
obj.job();


//freeze obj means nothing will be added or nothing change 
// Object.freeze(obj);

//add function in object
obj.greeting=function(){
    console.log("Hello Everyone");
}
obj.greeting();
//  for(let key in  obj){
//     console.log(  obj[key]);
    
//  }



 

 
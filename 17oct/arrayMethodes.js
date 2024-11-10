// array method (1. map,2.filter,3.reduce,4.forEach) used to tranform and return a new array 
// 1.map( )
// let arr=[2,4,2,4,2,6,73,6];
// function mymap(item){
//     return item*3;
// }
// let newArr=arr.map(mymap);
// console.log(newArr);

//or


// let arr=[2,4,2,4,2,6,73,6];
// let newArr=arr.map(function mymap(item){
//         return item*3;
//     });
//     console.log(newArr);

//or
// let arr=[2,4,2,4,2,6,73,6];
// let newArr=arr.map((item)=>{
//         return item*3;
//     });
//     console.log(newArr);
//or

// let arr=[2,4,2,4,2,6,73,6];
// let newArr=arr.map(item=> item*3);
//     console.log(newArr);





//2.filter
// let arr=[23,32,4,3,54,23,43];
//  let a=arr.filter((item)=>{
//     return item%2;
// });
// console.log(a);

//or
// let arr=[2,4,2,4,2,6,73,6];
// let newArr=arr.filter(item=> item %2);
//     console.log(newArr);


// 3.reduce when we have to convert the array into a single value by any operation 
// let arr=[10,12,13,234,34,54];
//  let a=arr.reduce((acc,curValue)=>{
//  acc=acc+curValue;
//  return acc;
// },0);
// console.log(a);


//4. forEach (map returns new array but forEach not return a new array)Only used as iterator not replace make changes to orginal array 
//  let arr=[2,4,2,4,2,6,73,6];
//  arr.forEach((item)=>item*2);
//  console.log(arr);



// Question given array filter out even no. and double there values and calculate sum 
// let arr=[15,19,20,22,18,13,11];
// let newArr=arr.filter(item=> item %2);
// let c =newArr.map(item=> item*2); 
// let a=c.reduce((acc,curValue)=>{
//      acc=acc+curValue;
//       return acc;
//      },0);
//      console.log(a);

     //orr
     let arr=[15,19,20,22,18,13,11];
     let newArr=arr.filter(item=> item %2).map(item=> item*2).reduce((acc,curValue)=>{
             acc=acc+curValue;
              return acc;
             },0);
    console.log(newArr);

    


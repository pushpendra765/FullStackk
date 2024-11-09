//let const var
// data types
// 1.Primitive(NUmber,String,Boolean ,NUll,undefine,Symbol)
// 2.NOn Primitive (Object,Array)
// console.log("Hello");
// let a="hello"
//  a=1
// console.log(typeof(a))
// let salary;
// console.log(typeof(salary))
// let c=null
// console.log(typeof(c));
// let val=BigInt("124564590897865434264677980909908796544131243468780900893443656")
// console.log(typeof(val));

// Array
// const arr=[[],234,656,6];
// console.log(typeof(arr));
// console.log(arr);
// arr.push(12);
// console.log(arr[0]);
// // const ar1=[1,2,3,3];
// // arr=ar1;

// console.log(arr);
// arr[0].push(113)
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("hello");//insert element at starting of array
// console.log(arr);
// arr.shift();//delete element from  starting  of array
// console.log(arr);
 
// let araa =arr.slice(2);

// console.log(araa);
// console.log(arr);
// araa.push("New Value")
// console.log(araa);
// console.log(arr);
// let ar1=arr.splice(2);
// console.log(arr);
// console.log(ar1);


// delete element
// const arr=[2,3,4,5,7,9,5,55,5];
// let ar1=arr.splice(3,1) ;//splice(start,delete count,addelement)
// console.log(arr);
// arr.splice(arr.indexOf(9),1);//indexof used to find the index of given value and splice is used to modify the content of orginal array
// console.log(arr);
// console.log(arr.lastIndexOf(5));//firstindexof and findindexof 




//loops in js()
// 1.for of(ye value pr iterate krta h )
const arr=[2,3,4,5,6,2,4,5,5];
for(let i of arr){
    console.log(i);
}
// 2.for in(ye idx pr iterate krta h)
const arr1=[2,3,4,5,6,2,4,5,5];
for(let i in arr1){
    console.log(arr1[i]);
}
//3. for Each loop
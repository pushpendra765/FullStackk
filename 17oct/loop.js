//1. for loop
let n=18;
for(let i=0;i<n;i++){

}
//2. while loop
while(n>0){
    n--;
}
//3. do while loop
let i=2;
do{

}while(i<n){

}
// for of loop cannot used in object beacuse objects are not iterable
let a={
    name:"abc",
    age:10,
    edu:"b"
}
for(let key in a){
    console.log(a[key]);
}
for(let value of a){
    console.log(value);
}

//4. for in loop(index pr iterate krta h)
// let arr=[1,3,4,6,7,3];
// for(let key in arr){
//     console.log(arr[key]);
// }
// 5 . for of loop(value pr iterate krta gh)
// for(let value of arr){
//     console.log(value);
// }
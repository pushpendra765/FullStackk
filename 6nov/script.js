//select elements in js
let a=document.getElementById('btn');
a.addEventListener("click",()=>{
    para.style.color="red";
    para.style.border="2px solid yellow";
    para.style.backgroundColor="blue";
})
console.log(a);





// // let b=document.querySelector('#btn');
// // let c=document.getElementsByTagName('tagname');
// // let d=document.getElementsByClassName('className');
// console.log(a,b);
let para=document.querySelector('.text');
// para.innerHTML="<ul><li>hello</li></ul>"
// //para.innerText="<ul><li>hello</li></ul>"
// // para.style.color="red";
// // para.style.border="2px solid yellow";
// // para.style.backgroundColor="blue";
// //when we add class to any element by
// para.classList.add("para4");
// //para.classList.remove("para4");
// // let parachild=
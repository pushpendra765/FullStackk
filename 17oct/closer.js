function fun1(){
    let a=10;
    let b=20;
    function fun2(){
        let c=40;
        function fun3(){
          
            return a+b+c;
        }
        console.log("Hello");
        return fun3;
    }
    return fun2;
}
// let refun=fun1();
// console.log(refun());// 30 because of closure beacuse a and b both are defined in the lexical scope of fun2  & lexical scope of any child function is full space of parent function
// // console.log(fun1());
// console.log(fun1()());
// console.log(fun1()()());//this will fun3




function fun1(){
    let a=10;
    let b=20;
     return()=>{
        let c=40;
        return()=>{
          
            return a+b+c;
        }
        //console.log("Hello");
        //return fun3;
    }
    //return fun2;
}
console.log(fun1()()());

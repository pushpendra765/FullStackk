function downloadBook(unzipped){//5 call back used here also known as callback hellor pyramid of doom
    setTimeout(()=>{
        console.log("Downloaded book from ");
        unzipped();
    },5000)
}
function unzipped( ){
    setTimeout(()=>{
        console.log("book unzipped");
        setTimeout(()=>{
            console.log("book parsing");
            setTimeout(()=>{
                console.log("Read and analysed prperly");
                setTimeout(()=>{
                    console.log("book uploaded sucessfully");
                },3000)
            },2000)
        },3000)
        
    },2000)
}
 
downloadBook(unzipped);
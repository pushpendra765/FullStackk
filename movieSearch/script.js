let inpBox=document.getElementById('inp');
let subButton=document.getElementById('btn');
let inmovies=document.getElementById('movies');
// console.log(inpBox);
 
subButton.addEventListener('click', ()=>{
    let inpValue=inpBox.value;
    // console.log(inpValue);
    // console.log("button clicked");
    fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q='${inpValue}'`)
    .then(res => {
       return  res.json();
    }).then((data)=>{
        let movies=data;
        console.log(movies);
        movies.description.map((movie)=>{
            let img_URL=movie.photo_url[1];
           // console.log(img_URL);
            let img=document.createElement('img');
            let tittle=document.createElement('h2');
            h2.innerText=movie.tittle;
            img.src=img_URL;
            img.classList.add('img');
            console.log(img);
            inmovies.appendChild(img);
            inmovies.appendChild(tittle);

           
        })
    })

})
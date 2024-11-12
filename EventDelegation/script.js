let container=document.getElementById('container');

container.addEventListener('click',(e)=>{
    if(e.target.tagName == 'BUTTON'){
      let value= Number(e.target.textContent);
      let res=0;
      if(e.target.textContent=='+'){
        res+=value;
      }
    }
})
import { useState } from 'react'
 
 

function App() {
  let [count, setCount] = useState(0)

  
    
       function handleIncrement(){
        setCount(count++)
        setCount(prev=>prev+1);
        console.log(count);
       }
       function handledecrement( ) {
        setCount(count--);
        console.log(count);
       }

       return (
        <>
        <div >
          <button onClick={handledecrement}> - </button>
          <button onClick={handleIncrement}>+</button>
        </div>
    </>
  )
}

export default App

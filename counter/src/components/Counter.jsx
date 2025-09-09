import './Counter.css';
import { useState } from 'react';

function Counter(){
   
  let [count ,setCount] = useState(0)

  function addition(){
       setCount(count+1)
  }

  function subraction(){
    if(count <= 0){
        setCount(0)
    }
    else{
    setCount(count-1)
    }
  }

  function reset(){
    setCount(0)
  }

    return <>
        <h3 className='count'>Count : {count} </h3>
        <button id='add' onClick={addition} >ADD</button>
        <button id='sub' onClick={subraction}>SUBRACT</button>
        <button id='reset' onClick={reset}>RESET</button>
    </>
}

export default Counter
import { useState } from 'react' //usestate hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //In React, Hooks are a set of functions that allow you to use state and 
 //other React features (like lifecycle methods) in functional components. 

 let [counter, updateCounter] = useState(15) //useState(15) this can take any value that we want it to take
//setCounter is a fucntion there to update the value for counter variable


  const addValue = () => {
    // console.log("CLicked", counter);
    if (counter >= 1){
    counter += 1
    updateCounter(counter) 
  } else {
      document.getElementById('removed').innerHTML='REmoved as it got down 0'
  }

    
  }
// let counter = 3
const removeValue = () => {
  // Decrement the counter by 1
  if (counter > 0) {
    updateCounter(counter - 1);
  }
}
  return (
    <>
      <h1>Sajid and React</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <h1 id='removed'></h1>


    </>
  )
}

export default App

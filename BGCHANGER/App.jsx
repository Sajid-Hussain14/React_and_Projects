import { useState } from 'react';

function App() {
  const [color, setColor] = useState("sdrakgrey")

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
        <button onClick={() => setColor ("skyblue") }className="outline-none px-4 py-3 rounded-full bg-sky-500 shadow">Skyblue</button>
        <button onClick={() => setColor("red")} className='outline-none px-4 py-3  rounded-full bg-red-500 shadow'>RED</button>
        <button onClick={() => setColor("green")} className='outline-none px-4 py-3  rounded-full bg-green-500 shadow'>Green</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-3  rounded-full bg-blue-500 shadow'>Blue</button>
        <button onClick={() => setColor("yellow")} className='outline-none px-4 py-3  rounded-full bg-yellow-500 shadow'>Yellow</button>
        <button onClick={() => setColor("teal")} className='outline-none px-4 py-3  rounded-full bg-teal-500 shadow'>Teal</button>

      </div>
    </div>
    </div>
  )
}

export default App

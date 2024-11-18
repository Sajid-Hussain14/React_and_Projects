import { useState , useCallback, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
//use of useCallback--to memorize, useEffect--optimization, useRef--reference hook to allow to manipulate any elements like copying in this case 
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //reference hook
  const ref = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*"
    for(let i = 1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]) //takes depenedncies --setPassword is given for optimization purposes

const copypassword = useCallback(() => {   
  ref.current?.select() //OPTIMIZATION PRACTICE -- THIS WILL SELECT THE PASSWORD AND HINT THAT IT IS COPIED
  ref.current?.setSelectionRange(0, 999)
  window.navigator.clipboard.writeText(password)
})

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]) 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-sky-500 bg-gray-700'>
    <h1 className='text-2xl font-bold text-black-500 text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
    <input type='text' value={password} 
    className='outline-none w-full py-1 px-3' 
    placeholder='password' 
    readOnly
    ref={ref}
    />
    <button onClick={copypassword} className='bg-sky-500 px-3 py-1 text-white'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range'
         min={6} 
         max={100} 
         value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
         <input type='checkbox'
         defaultChecked={numberAllowed}
         onChange={() => setNumberAllowed((prev) => !prev)}
         />
         <label htmlFor='numberInput'>Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
         <input type='checkbox'
         defaultChecked={charAllowed}
         onChange={() => setCharAllowed((prev) => !prev)}
         />
         <label htmlFor='characterInput'>characters </label>
         </div>
      </div>
    </div>
      
    </>
  )
}

export default App

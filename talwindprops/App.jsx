import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
//props make componenets reusable --- why not to store a component in a card and 
//reseuse it again and again--HERE WE USE PROPS AND ALREADY CREATED COMPONENT FROM CARD.JSX--
//AND USING PROPS WE CAN GIVE DIFFERENT TO THE CARD COMPONENT WHENEVER WE CALL IT FOR DIFFERENT DATA
// EG CARD1 NAME COULD BE SAJID AND IF WE CALL IT AGAIN IT WILL SHOW TH NAME AS SAME SAJID 
//SO WE NEED TO CHNAGE IT AND HERE PROPS WILL BE USED


function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username1:"Sajid",
    username2:"Hussain"
  }
//props in action below in card component
  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4'> Hello World</h1>
      <Card username="Sajid" btnText="Click Me"/>
      <Card username={"Hussain"} btnText="Check Me"/>
    </>
  )
}

export default App


// <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//   <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/96110929?v=4" alt="" width="384" height="512"/>
//   <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         Sarah Dayan
//       </div>
//       <div class="text-slate-700 dark:text-slate-500">
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>
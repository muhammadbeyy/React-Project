import React,{useState} from 'react';
import './style.css';
import Data from './Data'

export default function App() {
  const[count,setCount] = useState(0)
  const[verse,setVerse] = useState([Data])
 
  //console.log(count)

  const handleSubmit = (e) => {
   e.preventDefault()
   let amount = parseInt(count)
   if(count <= 0) {
     amount = 1
   } 
   if (count >=9) {
     amount = 9
   }
   setVerse(Data.slice(0,amount))
  }

  return (
     <section className='section-center'>
       <h2>Generate qur'anic Verses</h2>
       <form className='forms' onSubmit={handleSubmit}>
         <label htmlFor='name'>
           verses:
        </label>
        <input type='number' name='name' id='name' value={count} onChange={(e) => setCount(e.target.value)}
         />
         <button className='btn' type='submit'> generate</button>
       </form>
        <article className='text'>
          {verse.map((verse,index) => {
            return <p key={index}>{verse}</p>
          })}
        </article>
     </section>
     
    
  )
}


/*

The handleSubmit function is a callback function for a form submission event.
 It prevents the default form submission behavior, 
 parses the value of the "count" variable,
  and sets the "text" state variable with a slice of the "Data" array based on the parsed count. */
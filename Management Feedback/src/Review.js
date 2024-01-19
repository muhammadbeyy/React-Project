import React, {useState} from 'react';
import people from './Data'
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Review = () => {
   const [index,setIndex] = useState(0)
   const {name,text,image,job} = people[index]
   console.log(people)

   const checkNumber = (number) => {
     if(number > people.length -1) {
     return 0
     } else if (number < 0) {
     return people.length - 1
     }
     return number
     }
   

   const prevPerson = () => {
      setIndex((index) => {
        let  prevIndex = index - 1
        return checkNumber(prevIndex)
      })
   }

   const nextPerson = () => {
     setIndex((index) => {
       let nextIndex = index + 1
       return checkNumber(nextIndex)
     })
   }

     const random = () => {
       let randomNum = Math.floor((Math.random) * people.length)
       if (randomNum === index) {
         index + 1
       }
       setIndex(checkNumber(randomNum))
     }

    return (
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />  
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
           <FaAnglesLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
          <FaAnglesRight />
          </button>
        </div>
      </article>
      
      
    )

}

export default Review
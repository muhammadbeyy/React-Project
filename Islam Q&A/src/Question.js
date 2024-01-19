import React, {useState} from 'react'


import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const Question = ({quest}) => {
  
  const [showInfo,setShowInfo] = useState(false)

  return (
      <div>
        <section className='info'>
          {quest.map((Question) => {
            const {id,title,info} = Question
            return ( 
               <article className='question' key={id}>
                 <header>
                   <h4>{title}</h4>
                    <button
                      className='btn'
                      onClick={() => {
                        setShowInfo(!showInfo)
                      }}
                    >
                     {showInfo ? <CiSquarePlus /> : <CiSquareMinus />}
                    </button>
                 </header>
                   {showInfo && <p>{info}</p>}
               </article> 
            )
          })}
        </section>
      </div>
  )
}

export default Question
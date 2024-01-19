import React , {useState}from 'react';


const List = ({award}) => {
   return (
      <>
        {award.map((awardee) => {
          const {id,name,country,age,image,stats} = awardee
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
                <h5>{country}</h5>
                <p>{stats}</p>
              </div>

            </article>
          )
        })}
      </>
   )
}

export default  List
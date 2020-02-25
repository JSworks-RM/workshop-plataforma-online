import React from 'react'

const Teacher = ({picture, name, country}) => (
  <article>
   <div className="s-px-4">
     <div className="img-container circle s-mb-2">
       <img src={picture} alt={name}/>
     </div>
   </div>
   <div className="center">
     <p className="t3 s-mb-1">{name}</p>
     <p>{country}</p>
   </div>
  </article>
)

export default Teacher

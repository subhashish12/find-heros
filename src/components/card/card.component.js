import React from 'react';
import './card.styles.css';



export const Card = (props)=>{
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/sa${props.hero.id}?set=set3&size=180x180`} alt=""/>
      <h2> { props.hero.name }  </h2>
      <p>{ props.hero.email}</p>
    </div>
       
  )
}
import React from 'react';
import  './card-list.styles.css'
import { Card } from '../card/card.component';


export const CardList = (props)=>{
  console.log('props', props)
  return <div className='card-list'>   {
    props.Heros.map((hero)=> 
      <Card key={hero.id} hero={hero}/>
    )
  }</div>
} 
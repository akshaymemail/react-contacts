import React from 'react'
import Awatar from './Avatar'
import Info from './Info'

 function Card(props){
   return (
      <div className="card">
        <div className="top">
          <h2 className = 'name'>{props.name}</h2>
          <Awatar img = {props.img}/>
        </div>
        <div className='bottom'>
          <Info info = {props.phone} />
          <Info info = {props.email} />
        </div>
      </div>
   )
 }

 export default Card
import React, { useState } from 'react'
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  const [isDetailVisible, setIsDetailVisible] = useState(false)

  const toggleDetails = () => {
    setIsDetailVisible(!isDetailVisible);
  }
  return (
    <>
      <div className='main-container'>
        <img className='card-image'src={props.image} alt="image" />
        <span className='category'>{props.category}</span>
        <h1 className='heading'>{props.heading}</h1>
        <p className='description'>{props.description.slice(0,50)}{props.description.length>50 && <span>...</span>}</p>
        <div className="small">
          <span className='authorDetails'>{props.author}</span>
          <button className='showDetails' onClick={toggleDetails}>Read More</button>
        </div>
      </div>
      
      {isDetailVisible &&
        <div className='detailed-outer'>
          <div className="detailed-inner">
            <button className='hideDetails' onClick={toggleDetails}>X</button>
            <img className='card-image' src={props.image} alt="image" />
            <span className='category'>{props.category}</span>
            <h1 className='heading'>{props.heading}</h1>
            <p className='description'>{props.description}</p>
            <span>{props.author}</span>
          </div>
        </div>}
    </>
  )
}
Card.defaultProps = {
  author: 'Utkarsh'
}
export default Card

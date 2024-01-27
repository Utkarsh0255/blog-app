import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
function Header({onToggle , visible, search}) {
  
  return (
    <div className='header'>
      <h1>BLOG</h1>
      <input type='text' className='searchbar' onChange={search} placeholder='Search'/>
      <button className='addButton' onClick={onToggle}>
        {!visible && <FontAwesomeIcon icon={faPlus}/>}
        {visible && <FontAwesomeIcon icon={faXmark}/>}
        </button>
    </div>
  )
}

export default Header;

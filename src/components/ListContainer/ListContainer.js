import React from 'react'
import './ListContainer.css'

const ListContainer = (props) => {
    return (
  <ul className='ulList'>

    <li> {props.Mensaje} </li>

  </ul>
  )
}

export default ListContainer

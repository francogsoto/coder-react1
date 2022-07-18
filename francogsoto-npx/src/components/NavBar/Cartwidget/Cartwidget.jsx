import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'




const Cartwidget = () => {
  return (
    <div>  
      <h4>Tu compra: </h4>
    <FontAwesomeIcon icon={faShoppingCart} />
  </div>
  )
}

export default Cartwidget

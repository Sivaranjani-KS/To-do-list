//<ul>
import React from 'react'
//import { FaTrashAlt } from "react-icons/fa";
import Lineitem from './Lineitem';
const ItemsList=({items,handleCheck,handleDelete})=>{
  return(
    <ul>
    {items.map((item)=>(
      <Lineitem
      item={item}
      key={item.id}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    
      />
      
  ))
}
</ul>
  )}
export default ItemsList
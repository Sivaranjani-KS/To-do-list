//<li>
//itemlist to lineitem
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Lineitem=({item,handleCheck,handleDelete})=>{
  return(
    <li className="item" key={item.id}>
    <input type="checkbox"
    onChange={()=>handleCheck(item.id)}
    checked={item.checked}
    />
  
    <label
    style={(item.checked)?{textDecoration:"line-through"}:null}
    onClick={()=>handleCheck(item.id)}>{item.item}</label>
   <FaTrashAlt
    role="button"
    onClick={()=>handleDelete(item.id)}
    tabIndex="0"
    aria-label={`delete ${item.item}`}
    />
  </li>
  )
}
export default Lineitem
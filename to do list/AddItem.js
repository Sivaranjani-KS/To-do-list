import React from 'react'
//import { useState } from 'react';
import {FaPlus} from 'react-icons/fa'
const AddItem=({newItem, setNewItem, handleSubmit})=>{
  return(
<form className='addForm' onSubmit={handleSubmit}>
<label htmlFor="addItem">Add Item</label>
<input
   autoFocus
    id='addItem'
    type='text'
    placeholder='Add Item'
    required
    value={newItem}//linked
    onChange={(e)=>setNewItem(e.target.value)}

   
   />

<button
 type="submit"
    aria-label='Add Item'>
 < FaPlus />
 </button>
</form>
  )
}
export default AddItem

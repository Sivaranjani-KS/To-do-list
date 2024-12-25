import React from 'react'
//import { useState } from 'react';

import ItemsList from './ItemsList';
///receive the child
const Statement=({items,handleCheck,handleDelete})=>{

  
  return(
    <main>
     {(items.length)?(
   <ItemsList
   items={items}
      
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
  ):(
      <p style={{color:"violet"}}>lists is empty</p>
     )
    }
   </main>
  )
}
export default Statement;
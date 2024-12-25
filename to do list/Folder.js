import React from 'react'
const Folder=({length})=>{
  
  return(
   <footer>{length} List {length>1?"items":"item"}</footer>
  )
}
export default Folder;
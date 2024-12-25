//import logo from './logo.svg';
//import './App.css';


import Header from "./Header";
import Folder from "./Folder";
import Statement from "./Statement";
import { useState } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  const [items,setItems]=useState(
    JSON.parse(localStorage.getItem('todo_list'))//string to js obj
     );
      //to update new item 
      const [newItem,setNewItem]=useState('')
     const[search,setSearch]=useState('')



      const addItem=(item)=>{
        const id=items.length?items[items.length-1].id+1:1;
        const addNewItem={id,checked:false,item}
        const listItems=[...items,addNewItem]
        setItems(listItems)
        //data store
       localStorage.setItem("todo_list",JSON.stringify(listItems))
      }
      const handleCheck=(id)=>{
        const listItems=items.map((item)=>
        item.id===id?{...item,checked:!item.checked}:item)
        setItems(listItems)
        //data store
       localStorage.setItem("todo_list",JSON.stringify(listItems))
        
      }
      const handleDelete=(id)=>{
        const listItems=items.filter((item)=>
        item.id!=id)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems))
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
      
       if(!newItem)return;
       console.log(newItem)
       addItem(newItem)
       setNewItem('')//again empty ah iru
       
      }

  return (
    <div className="App">
      <Header title="To do list" />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

<SearchItem
search={search}
setSearch={setSearch}





/>
      <Statement
      items={items.filter(item=>((item.item).
        toLowerCase()).
      includes(search.toLowerCase()))}
      
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Folder 
      length={items.length}/>
      
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value,setValue] = useState("");
    const [list,setList] = useState([{val:"Auxenta"},{val:7},{val:"Ashan"}]);

    function handleChange(event){
      setValue(event.target.value);
      console.log(value);
    }
  
    function handleList(event){
      setList([{val:value},...list]);
      // alert(event.target.value)
      event.preventDefault();
      console.log(list);
    }

    function removeValue(item){
      // alert("Clicked")
      console.log(item);
      const newlist = list.splice(item,1);
      console.log(newlist);
      console.log(list)
      setValue({list:list})
    }
   
  
  return(
    <div>
      <div><h1>To Do List</h1></div>
      <form >
        <input placeholder="Enter a value" onChange={handleChange}/>
        <input type="submit" value="submit" onClick={handleList}/>
        <input type="reset" value="Reset"/>
        <input type="button" value="Remove All" onClick={()=>(setList([]))}/>

      </form>
  <div>
      <ul>
        
        {list.map((item) => {
          return <li key={list.indexOf(item)}>{item.val} <input type="button" value="Delete" onClick={()=> removeValue(list.indexOf(item))}/></li>;
        })}
      </ul>

  </div>
    </div>
  );
}

export default App;

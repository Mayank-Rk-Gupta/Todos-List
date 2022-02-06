import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';


function App() {
   const onDelete = (todo)=>{
     console.log("I am ondelete",todo);
     setTodos(todos.filter((element)=>{
       return element!== todo;
     }))
   }
   
   const [todos, setTodos] = useState([
     {
       SerialNo:1,
       title: "Learn Blockchain",
       description: "Blockchain is a technology which is immutable and peers to peers distributes"
     },
     {
       SerialNo:2,
       title: "Learn Ethereum",
       description: "Ethereum is a prototype of blockchain technology"
     },
     {
       SerialNo:3,
       title: "Learn Solidity",
       description: "Solidity is a high level proggraming language In which the smart contract of Ethereum is writter"
     }
    ]);
  return(
    <>
      <Header title ="My Todos List"/>
      <Todos todos={todos} onDelete={onDelete}/>
      
      
    
    </>
  );
}

export default App;

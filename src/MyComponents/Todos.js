import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  let myStyle={
    minHeight:"10vh"
  }
  return (
      <div className='container' style={myStyle}>
          <h3 className='my-3'>Todos list</h3>
          {props.todos.length===0 ? <h2>No todos to display</h2> : 
            props.todos.map((todo)=>{
                return (
                <>
                <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
                <hr/>
                </>
                )
            })
          } 
       </div>
  );

}

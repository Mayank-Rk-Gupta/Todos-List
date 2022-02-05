import React from 'react';

export default function TodoItem({todo}) {
  return (<div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      
  </div>);
}

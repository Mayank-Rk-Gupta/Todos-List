import React, { useState } from 'react';

export const AddToDos = ({addTodo}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitTodo =(e)=>{
    e.preventDefault();
    if(!title || !description){
      alert("Title or Description can not be empty");
    }
    addTodo(title,description);

  }

  return (<div className='container my-3' >
    <h3>Add a todo</h3>
    <form onSubmit={submitTodo}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Todo Description</label>
    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
  </div>);
};

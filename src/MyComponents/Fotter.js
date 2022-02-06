import React from 'react';

export default function Fotter() {
  let FooterStyle ={
    position: "absoluete",
    top:"100vh",
    width:"100%"

  }
  return (
  <footer className='bg-dark text-light py-3'style={FooterStyle}>
    <p className="text-center">
      Copyright &Copy;MyTodosList.com
    </p>
      
  </footer>);
}

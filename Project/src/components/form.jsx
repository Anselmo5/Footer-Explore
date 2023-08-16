import React from 'react'
import './form.css'
const form = () => {
  return (
    <>
    <form className='aling forms'>
        <label htmlFor="nome" className='lbsty'>Nome</label>
        <input type="text" name="nome" className='inp'/>
        <label htmlFor="gmail" className='lbsty'>Gmail</label>
        <input type="email" name='gmail'  className='inp'/>
        <label htmlFor="senha" className='lbsty'>Senha</label>
        <input type="password" name='senha'  className='inp'/>
    </form>
    </>
  )
}

export default form
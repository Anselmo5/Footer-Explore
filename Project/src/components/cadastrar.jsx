import React from 'react'
import './cadastrar.css'
import footerexport from '../assets/Group 5946.png'
import { Link } from 'react-router-dom'
const cadastrar = () => {
  return (
    <div>

          <div className='alingimg'>
              <img src={footerexport} alt="" />
          </div>

          <div className='aling'>
                <form className=' forms'>
                    <h2 className='texformats'>Crie sua conta </h2>
                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'>Email</label>
                        <input type="email" name='nome'  className='inpfaixa' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                      </div>

                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Senha</label>
                        <input type="password" name='nome'  className='inpfaixa' placeholder='No mínimo 6 caracteres '/>
                      </div>

                      <div className='btnfaixa'>                                                     
                        <button className='btnfaixa'> Criar conta </button>
                      </div>

                      <div className='alingtext'>
                          <Link to="/" className='formatedlink'> <p>Já Tenho Cadastro</p></Link>
                      </div>
                </form>
          </div>
          
    </div>
    
  )
}

export default cadastrar
import React from 'react'
import './form.css'
import footerexport from '../assets/Group 5946.png'
import { Link } from 'react-router-dom'
const Form = () => {
  return (
    <div>

          <div className='alingimg'>
              <img src={footerexport} alt="" />
          </div>

          <div className='aling'>
                <form className=' forms'>
                    <h2 className='texformats'>Crie sua conta </h2>
                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Seu Nome</label>
                        <input type="text" name='nome'  className='inpfaixa' placeholder='Exemplo: Maria da Silva' id='nome'/>
                      </div>

                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Seu Email</label>
                        <input type="email" name='nome'  className='inpfaixa' placeholder='Exemplo: exemplo@exemplo.com.br' id='email'/>
                      </div>

                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Sua Senha</label>
                        <input type="password" name='nome'  className='inpfaixa' placeholder='No mínimo 6 caracteres '  id='senha'/>
                      </div>

                      <div className='btnfaixa'>                                                     
                          <Link to="/home" className='btnfaixa'> <p>Criar Conta</p> </Link>
                      </div>

                      <div className='alingtext'>
                          <Link to="/cadastrar" className='formatedlink'> <p>Já Tenho Cadastro</p></Link>
                      </div>
                </form>
          </div>
          
    </div>
    
  ) 
  
}

export default Form;


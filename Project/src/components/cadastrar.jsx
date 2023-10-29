import React from 'react'
import './cadastrar.css'
import footerexport from '../assets/Group 5946.png'
import { Link } from 'react-router-dom'
const cadastrar = () => {
  return (
    <div>

         
          <div className='alings'>
              <div className='alingimga'>
                  <img src={footerexport} alt="" />
              </div>
                <form className=' form'>
                    <h2 className='texformatst'>Crie sua conta </h2>
                      <div className='faixas'>
                        <label htmlFor="nome" className='texfaixa'>Email</label>
                        <input type="email" name='nome'  className='inpfaixas' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                      </div>

                      <div className='faixas'>
                        <label htmlFor="nome" className='texfaixas'> Senha</label>
                        <input type="password" name='nome'  className='inpfaixas' placeholder='No mínimo 6 caracteres '/>
                      </div>

                      <div className='btnfaixas'>                                                     
                        <Link to="/adm" className='btnfaixa'> Criar conta </Link>
                      </div>

                      <div className='alingtextst'>
                          <Link to="/" className='formatedlinks'> <p>Já Tenho Cadastro</p></Link>
                      </div>
                </form>
          </div>
          
    </div>
    
  )
}

export default cadastrar
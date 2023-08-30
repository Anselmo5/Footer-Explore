import React from 'react'
import './form.css'
import footerexport from '../assets/Group 5946.png'
const form = () => {
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
                        <input type="text" name='nome'  className='inpfaixa' placeholder='Exemplo: Maria da Silva'/>
                      </div>

                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Seu Nome</label>
                        <input type="email" name='nome'  className='inpfaixa' placeholder='Exemplo: exemplo@exemplo.com.br'/>
                      </div>

                      <div className='faixa'>
                        <label htmlFor="nome" className='texfaixa'> Seu Nome</label>
                        <input type="password" name='nome'  className='inpfaixa' placeholder='No mínimo 6 caracteres '/>
                      </div>

                      <div className='btnfaixa'>
                                                                            
                        <button className='btnfaixa'> Cadastrar</button>
                      </div>
                </form>
          </div>
          
    </div>
    
  )
}

export default form
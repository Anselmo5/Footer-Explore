import React from 'react'
import './form.css'
import footerexport from '../assets/Group 5946.png'
import { Link } from 'react-router-dom'



const Form = () => {
  
  let Nome= document.getElementById("nome")
  let Email = document.getElementById("email")
  let Senha = document.getElementById("senha")
  let url = "./info.json"
  fetch(url)// e utilizado para tratar arquivo
      .then(res => res.json())
      .then(data =>{
        for(var Cadastro of data.Cadastrar){
          {
              Nome.value = Cadastro.Nome
              Email.value = Cadastro.Email
              Senha.value = Cadastro.Senha
              break
          }
        }
      })

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
                        <button className='btnfaixa'> Criar conta </button>
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


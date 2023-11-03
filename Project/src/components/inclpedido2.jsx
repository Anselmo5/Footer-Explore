import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import comida5  from '../assets/comida5.png'
import logo from '../assets/Polygon 1.png'
const inclpedido2 = () => {
  return (
    <div>
       <div>
      <nav>
        <div className='alingpedi'>


          <img src={logoadm} alt="" />
          <div className='inppedi'>
            <input
              type="text"
              placeholder='Busque por pratos e incredientes'
            />
          </div>

          <div className='btnpedi'>
            <Link>Novo Pedido</Link>
          </div>

          <div className="saidaicon">
            <Link to='/cadastrar'>
              <img src={saida} alt="" />
            </Link>
          </div>

        </div>
      </nav>


      <div className="voltar">
        <img src={setasaida} alt="" />
        <Link to='/home'>Voltar</Link>
      </div>

      <div className='conteudo'>
        <img src={comida5} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Peachy pastrie</h2> </div>
          <div> <p>Delicioso folheado de pêssego com folhas de hortelã.</p> </div>
          <div className='incredientes'>
            <button>pêssego</button>
            <button>hortelã</button>
          </div>

          <div className='Edit'>
            <Link>Incluir</Link>
          </div>
        </div>
      </div>

      <footer>
        <div className='alinp'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alinsp'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>

    </div>
    </div>
  )
}

export default inclpedido2

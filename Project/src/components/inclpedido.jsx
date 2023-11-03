import React from 'react'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'

import comida4  from '../assets/comida4.png'
import logo from '../assets/Polygon 1.png'
import './pedido.css'
const inclpedido = () => {
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
            <Link to='/'>
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
        <img src={comida4} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Prugna Pie</h2> </div>
          <div> <p>Torta de ameixa com massa amanteigada, polvilho em açúcar.</p> </div>
          <div className='incredientes'>
            <button>ameixa</button>
            <button>massa amanteigada</button>
            <button>polvilho</button>
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

export default inclpedido

import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import comida6  from '../assets/comida6.png'
import footerexport from '../assets/Group 5946.png'
import logo from '../assets/Polygon 1.png'
const inclpedido3 = () => {
  return (
    <div>
         <div>
      <nav>
        <div className='alingpedi'>

        <div className='imgincli'>
            <img src={footerexport} alt="" />
          </div>
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
        <img src={comida6} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Macarons</h2> </div>
          <div> <p>Farinha de amêndoas, manteiga, claras e açúcar.</p> </div>
          <div className='incredientes'>
            <button>Farinha de amêndoas</button>
            <button>manteiga</button>
            <button>claras</button>
            <button>açúcar</button>
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

export default inclpedido3

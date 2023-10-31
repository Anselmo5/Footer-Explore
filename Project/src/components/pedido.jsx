import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import comida from '../assets/comida.png'
import logo from '../assets/Polygon 1.png'

const pedido = () => {
  return (
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
        <Link to='/adm'>Voltar</Link>
      </div>

      <div className='conteudo'>
        <img src={comida} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Salada Ravanello</h2> </div>
          <div> <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p> </div>
          <div className='incredientes'>
            <button>alface</button>
            <button>cebola</button>
            <button>pão naan</button>
            <button>pepino</button>
            <button>rabanete</button>
            <button>tomate</button>
          </div>

          <div className='Edit'>
            <Link to='/editar'> Editar prato</Link>
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
  )
}

export default pedido

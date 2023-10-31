import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import comida from '../assets/comida.png'
import comida3 from '../assets/comida3.png'
import logo from '../assets/Polygon 1.png'

const pedido3 = () => {
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
        <img src={comida3} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Torradas de Parma</h2> </div>
          <div> <p>Presunto de parma e rúcula em um pão com fermentação natural.</p> </div>
          <div className='incredientes'>
            <button>Presunto</button>
            <button>Rúcula</button>
            <button>Pão com fermentação</button>
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

export default pedido3

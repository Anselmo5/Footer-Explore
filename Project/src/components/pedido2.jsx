import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import comida from '../assets/comida.png'
import comida2 from '../assets/comida2.png'
import logo from '../assets/Polygon 1.png'

const pedido2 = () => {
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
        <img src={comida2} alt="" />
        <div className='alingconteudo'>
          <div> <h2>Spaguetti Gambe</h2> </div>
          <div> <p>Massa fresca com camarões e pesto.</p> </div>
          <div className='incredientes'>
            <button>Massa</button>
            <button>Camarões</button>
            <button>Pesto</button>
          </div>

          <div className='Edit'>
            <Link to='/edit'> Editar prato</Link>
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

export default pedido2

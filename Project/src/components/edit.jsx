import React from 'react'
import { Link } from 'react-router-dom'
import './edit.css'

const edit = () => {
  return (
    <div>
      <nav>
        <div className='alinged'>


          <img src={logoadm} alt="" />
          <div className='inped'>
            <input
              type="text"
              placeholder='Busque por pratos e incredientes'
            />
          </div>

          <div className='btned'>
            <Link>Novo Pedido</Link>
          </div>

          <div className="saidaiconed">
            <Link to='/cadastrar'>
              <img src={saida} alt="" />
            </Link>
          </div>

        </div>
      </nav>

      <footer>
        <div className='alined'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alinsed'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>

    </div>
  )
}

export default edit
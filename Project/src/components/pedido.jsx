import React from 'react'
import './pedido.css'
import { Link } from 'react-router-dom'
import logoadm from '../assets/Frame.png'
const pedido = () => {
  return (
    <div>
      <nav>
        <div className='alingpedi'>


          <img src={logoadm} alt="" />
          <div className='inppedi'>
              <input type="text" />
          </div>

          <div className='btnpedi'>
            <Link>Novo Pedido</Link>
          </div>
        </div>
      </nav>


      <footer>

      </footer>

    </div>
  )
}

export default pedido

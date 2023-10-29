import React from 'react'
import "./adm.css"
import logoadm from '../assets/Frame.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

        

const Adm = () => {


  return (
    <div>
      <nav>
        <div className='alinhamentoadm'>

          <div className='alinhamentoimgadm'>
            <img src={logoadm} alt="" />
          </div>
          <div className='inpadm'>
            <input type="text" placeholder='Busque por pratos ou ingredientes' />
          </div>

          <div className='btnadm'>
              <Link to="/pedido"> Novo Prato</Link>
          </div>
        </div>
      </nav>



      <div className='alingcontaineradm'>
        <div className='containerblockadm'>
          <img src={logo2} alt="" />

          <div className='aladm'>
            <h2>Sabores inigualáveis</h2>

          </div>
          <div className='aladm'>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </div>


    {/* Cards */}
    
    
  {/* fim cards */}

      <footer>
        <div className='alinadm'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alinsadm'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default Adm

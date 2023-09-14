import React from 'react'
import "./home.css"
import footerexport from '../assets/Group 5946.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'

const Home = () => {
  return (
    <div>
      <nav>
        <div className='alinhamento'>

          <div className='alinhamentoimg'>
            <img src={footerexport} alt="" />
          </div>
          <div className='inp'>
            <input type="text" placeholder='Busque por pratos ou ingredientes' />
          </div>
          <div className='btn'>
            <button>Pedidos (0)</button>
          </div>
        </div>
      </nav>



      <div className='alingcontainer'>
        <div className='containerblock'>
          <img src={logo2} alt="" />

          <div className='al'>
            <h2>Sabores inigualáveis</h2>

          </div>
          <div className='al'>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </div>

      <footer>
        <div className='alin'>
          <img src={logo} alt='' />
          <p> food explorer</p>
        </div>

        <div className='alins'>
          <p> © 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

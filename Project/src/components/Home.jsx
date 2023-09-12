import React from 'react'
import "./home.css"
import footerexport from '../assets/Group 5946.png'
const Home = () => {
  return (
    <div>
      <nav>
        <div className='alinhamento'>
            
            <div className='alinhamentoimg'>
              <img src={footerexport} alt="" />
            </div>
              <div className='inp'>
                <input type="text" placeholder='Busque por pratos ou ingredientes'  />
              </div>
              <div className='btn'>
                <button>Pedidos (0)</button>
              </div>
        </div>
      </nav>
    </div>  
  )
}

export default Home

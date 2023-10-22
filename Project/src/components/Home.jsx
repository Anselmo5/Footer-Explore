import React from 'react'
import "./home.css"
import footerexport from '../assets/Group 5946.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import Slider from 'react-slick'

        

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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


    {/* Cards */}
    
    <div className="carousel">
      <Slider  {...settings}>
        <div className="box">
          <h3> 1</h3>
        </div>

        <div className="box">
          <h3> 1</h3>
        </div>

        <div className="box">
          <h3> 1</h3>
        </div>


        <div className="box">
          <h3> 1</h3>
        </div>

        <div className="box">
          <h3> 1</h3>
        </div>

          <div className="box">
          <h3> 1</h3>
        </div>
      </Slider>
    </div>

  {/* fim cards */}

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

import React from 'react'
import logoadm from '../assets/Frame.png'
import logo from '../assets/Polygon 1.png'
import logo2 from '../assets/pngegg 1.png'
import saida from '../assets/sair.png'
import setasaida from '../assets/seta-esquerda.png'
import { Link } from 'react-router-dom'
import './enviarpedido.css'
const enviarpedido = () => {
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
                        <Link to=""> Novo Prato</Link>
                    </div>
                </div>

                <div className="saidaiconh">
                    <Link to='/adm'>
                        <img src={saida} alt="" />
                    </Link>
                </div>
            </nav>

            {/* inicio form */}

            <div className='ajustform'>
                <div className="voltar">
                    <img src={setasaida} alt="" />
                    <Link to='/adm'>Voltar</Link>
                </div>

                <div className='text'>
                    <h2>Adicionar prato</h2>
                </div>

                <div className='alinginpt'>
                    <div className='forminp1'>
                        <label>
                            Imagem do Prato:
                            <input type="text" />
                        </label>
                    </div>


                    <div className='forminp2'>
                        <label>
                            Nome:
                            <input type="text" placeholder='Ex.: Salada Ceasar' />
                        </label>
                    </div>


                    <div className='forminp3'>
                        <label>
                            Categoria:
                            <select name="role">
                                <option value="ex">Refeição</option>
                                <option value="prato1">Almoço</option>
                                <option value="prato2">Janta</option>
                                <option value="parato3">Café da Manha</option>
                            </select>
                        </label>
                    </div>
                </div>


                <div className='alinginpt'>
                    <div className='forminp4'>
                        <label>
                            Ingredientes:
                            <input type="text" />
                        </label>

                    </div>

                    <div className='forminp5'>
                        <label>
                            Preço:
                            <input type="number" placeholder='R$ 00,00'/>
                        </label>
                    </div>
                </div>

                <div className='alinginpt forminp6'>
                    <label>
                        Descrição:
                        <input type="text" placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
                    </label>
                </div>

                <div className='btnalint'>
                    <button>Salvar alterações</button>
                </div>

                <div>

                </div>
            </div>
            {/* fim form */}
         <div className='editefooter'> 
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
        </div>
    )
}

export default enviarpedido

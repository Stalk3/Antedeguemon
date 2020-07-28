import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo2.png';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo da AluraFlix" />
        </Link>
          <Button as={ Link } className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
          </Button>
        </nav>
)
}
export default Menu
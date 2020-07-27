import React from 'react'
import Logo from '../../assets/img/Logo2.png';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Logo da AluraFlix" />
        </a>
          <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
          </Button>
        </nav>
)
}
export default Menu
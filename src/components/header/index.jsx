import './style.css'
import logo from '../../asset/images/logo.svg'

export default function Header() {
    return (
        <header>
            <img src={logo} />
            <nav>
                <a href="">Inicio</a>
                <a href="">Contato</a>
                <a href="">Sobre nos</a>
                <a href="">Saiba mais</a>
                <p>Cadastre-se</p>
               
            </nav>

            <button>
                Try it for free
            </button>

        </header>
    )
}
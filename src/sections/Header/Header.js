import './Header.css'
import logo from '../../assests/images/logo1.png'
import { NavLinks, Container, MainBtn } from '../../components'

import { NavHashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return(
    <nav className="header navbar navbar-expand-lg">
    <Container>
        <a className="navbar-brand" href="/#"><img alt='logo' src={logo}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item navLink'><NavHashLink is='active' to="/">Home</NavHashLink></li>
            <li className='nav-item navLink'><NavHashLink is='' to="/#about">About</NavHashLink></li>
            <li className='nav-item navLink'><NavHashLink is='' to="/#features">Features</NavHashLink></li>
            <li className='nav-item navLink'><NavHashLink is='' to="/#prices">Prices</NavHashLink></li>
            <li className='nav-item navLink'><NavHashLink is='' to="/#reviews">Reviews</NavHashLink></li>
            <li className='nav-item navLink'><NavLink to="/Faqs">Show me Tell me</NavLink></li>
        </ul>
        <MainBtn link="#">Get Started</MainBtn>
        </div>
    </Container>
    </nav>
    )
}

export default Header
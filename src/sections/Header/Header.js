import './Header.css'
import logo from '../../assests/images/logo1.png'
import { NavLinks, Container, MainBtn } from '../../components'

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
            <NavLinks id="#home">Home</NavLinks>
            <NavLinks id="#about">About</NavLinks>
            <NavLinks id="#features">Features</NavLinks>
            <NavLinks id="#prices">Prices</NavLinks>
            <NavLinks id="#reviews">Reviews</NavLinks>
        </ul>
        <MainBtn link="#">Get Started</MainBtn>
        </div>
    </Container>
    </nav>
    )
}

export default Header
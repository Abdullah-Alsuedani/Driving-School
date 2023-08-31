import './NavLinks.css'

const NavLinks = (props) => {
    return(
        <li className='nav-item navLink'><a className="nav-link" href={props.id}>{props.children}</a></li>
    )
}

export default NavLinks
import './FooterSection.css'
import envolope from '../../assests/images/envolope.png'
import location from '../../assests/images/location.png'
import phone from '../../assests/images/phone.png'
import facebook from '../../assests/images/facebook.png'
import youtube from '../../assests/images/youtube.png'
import linkedin from '../../assests/images/linkedin.png'
import twitter from '../../assests/images/twitter.png'
import logo from '../../assests/images/logo1.png'

import {Container} from '../../components/index'

const Footer = () => {
    return(
        <div className='footer'>
            <Container>
                <img className='logo' src={logo} alt='Logo'/>
                <ul className='infos'>
                    <li><img src={location} alt='location'/> Leamington spa, Warwick</li>
                    <li><img src={phone} alt='phone'/> 07900502005</li>
                    <li><img src={envolope} alt='envolope'/> Info@005ds.co.uk</li>
                </ul>
                <ul className='socials'>
                    <li>Follow Us:</li>
                    <li><a href="/#"><img src={linkedin} alt='linkedin'/></a></li>
                    <li><a href="/#"><img src={facebook} alt='facebook'/></a></li>
                    <li><a href="/#"><img src={twitter} alt='twitter'/></a></li>
                    <li><a href="/#"><img src={youtube} alt='youtube'/></a></li>
                </ul>
            </Container>
            <p className='copyright'>© <span>ChooseSpeed</span>, All Right Reserved.</p>
        </div>
    )
}

export default Footer
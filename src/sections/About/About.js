import './About.css'
import { Container, Title } from '../../components/index'
import img from '../../assests/images/about.png'

const About = () => {
    return(
        <div className='about'>
            <Container>
                <img src={img} alt="about"/>
                <div className='info'>
                    <Title sectionName="About Us">
                     Approved driving instructor based in Leamington and Warwick
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About
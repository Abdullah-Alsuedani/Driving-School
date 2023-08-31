import './Features.css'
import { Container, Title } from '../../components/index'
import img from '../../assests/images/features.png'

const Features = () => {
    return(
        <div className='features'>
            <Container>
                <div className='info'>
                    <Title sectionName="Why Choose Us!">
                    Highly rated instructors, patient and friendly. We use most up to date materials and bespoke techniques and methods of teaching
                    </Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>
                <img src={img} alt="features"/>
            </Container>
        </div>
    )
}

export default Features
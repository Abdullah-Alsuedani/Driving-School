import './Hero.css'
import { MainBtn, SecondaryBtn } from '../../components'

const Hero = () =>{
    return(
        <div className='hero-section'>
            <div className="overlay"></div>
            <div className='info'>
                <h1>Drive <span>Safely</span>, <br/> Driver Smarter</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </p>
                <div className='btns'>
                    <MainBtn link="#">Get Started</MainBtn>
                    <SecondaryBtn link="#">Learn More</SecondaryBtn>
                </div>
            </div>
        </div>
    )
}

export default Hero
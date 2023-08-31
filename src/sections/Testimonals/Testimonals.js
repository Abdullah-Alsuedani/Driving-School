import './Testimonals.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {Container, Title, TestimonalsCard} from '../../components/index'

import TestimonalsData from '../../Data/TestimonalsData'

const Testimonals = () =>{
    let options = {
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        },
        loop: true,
        autoplay: true,
        dots: true
    }

    const TestimonalCard = TestimonalsData.map(el=>
            <TestimonalsCard
                key={el.id}
                img={el.img}
                title={el.title}
                job={el.job}
                desc={el.desc}
            />
        )


    return(
        <div className='testimonals'>
            <Container>
                <Title sectionName="Testimonals">
                  What Our Clients Say!
                </Title>
                <OwlCarousel {...options}>
                    {TestimonalCard}
                </OwlCarousel>
            </Container>
        </div>
    )
}


export default Testimonals
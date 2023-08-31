import './Courses.css'
import {Container, Title, CourseCard} from '../../components/index'

import CoursesData from '../../Data/CoursesData'


const Courses = () => {

    const CoursesCards = CoursesData.map(el=>{
        return <CourseCard
        key={el.id}
        img={el.img}
        title={el.title}
        price={el.price}
        desc={el.desc}
        level={el.level}
        time={el.time}/>
    })

    return(
        <div className='courses'>
            <Container>
                <Title sectionName="Trending Courses">
                    Our Courses Upskill You With Driving Training
                </Title>
                <div className='cards-container'>
                    {CoursesCards}
                </div>
            </Container>
        </div>
    )
}


export default Courses
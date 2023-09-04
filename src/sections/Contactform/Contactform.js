import './Contactform.css'
import CoursesData from '../../Data/CoursesData'
import {Container} from '../../components/index'
import {FaArrowRight} from 'react-icons/fa'

const form = () =>{

    const courseOption = CoursesData.map(el=>{
        return <option key={el.id}>{el.title}</option>
    })

    return(
        <div className='form-section'>
            <Container>
                <h2>Start Your Drive Courses</h2>
                <form>
                    <input type='text' placeholder='Your Name..'/>
                    <input type='text' placeholder='Your Name..'/>
                    <input type='text' placeholder='Your Name..'/>
                    <input type='email' placeholder='Your Email..'/>
                    <input type='phone' placeholder='Your phone..'/>
                    <select defaultValue='Choose Course...'>
                        <option disabled hidden>Choose Course...</option>
                        {courseOption}
                    </select>
                    <button type='submit'>Start Now <FaArrowRight/></button>
                </form>
            </Container>
        </div>
    )
}

export default form


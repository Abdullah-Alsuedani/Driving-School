import './CourseCard.css'

import level from '../../assests/images/level.png'
import calendar from '../../assests/images/calendar.png'

const CourseCard = (props) =>{

    return(
        <div className='course-card' style={{backgroundImage:`url(${props.img})`, backgroundSize:'cover'}}>
            <div className='course-card-title'>
                <h4>{props.title}</h4>
                <h4>{props.price}</h4>
            </div>
            <div className='info'>
                <p>
                    {props.desc}
                </p>
                <ul>
                    <li><img src={level} alt='levelImage'/> {props.level}</li>
                    <li><img src={calendar} alt='levelImage'/> {props.time}</li>
                </ul>
            </div>
        </div>
    )
}


export default CourseCard
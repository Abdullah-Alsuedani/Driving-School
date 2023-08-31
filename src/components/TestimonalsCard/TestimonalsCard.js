import './TestimonalsCard.css'
import qouteImage from '../../assests/images/qoute.png'

const TestimonalsCard = (props) =>{
    return(
        <div className='testimonals-card'>
            <div className='testimonals-content'>
                <img src={qouteImage} alt='qouteImage' className='qoute' />
                <div className='testimonals-head'>
                    <img src={props.img} alt='profilePic' className='profile-img'/>
                    <div className='info'>
                        <h6>{props.title}</h6>
                        <p>{props.job}</p>
                    </div>
                </div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}

export default TestimonalsCard
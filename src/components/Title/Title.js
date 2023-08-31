import './Title.css'

const Title = (props) =>{
    return(
        <div className='title'>
            <span>{props.sectionName}</span>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Title
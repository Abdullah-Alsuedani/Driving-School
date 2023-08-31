import './Buttons.css'

const MainBtn = (props) => {
    return(
        <a href={props.link} className='main-btn'>
            {props.children}
        </a>
    )
}

const SecondaryBtn = (props) => {
    return(
        <a href={props.link} className='secondary-btn'>
            {props.children}
        </a>
    )
}

export default MainBtn;
export {SecondaryBtn}
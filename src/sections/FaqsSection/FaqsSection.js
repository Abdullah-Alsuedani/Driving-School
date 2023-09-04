import './FaqsSection.css'

import arrow from '../../assests/images/arrow.png'

import { useEffect } from 'react'

import { NavHashLink } from 'react-router-hash-link'

const FaqsSection = () => {

    useEffect(()=>{
        

    let question = document.querySelectorAll('.faqs .question-container h4')

    question.forEach(el=>{
        el.addEventListener('click', (e) => {
            e.target.parentElement.classList.toggle('active')
        })
    })



    })


    return(
        <div className="faqs">
        <div className="title">
            <span>FAQ's</span>
            <h2>Frequently Asked Questions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laborum sequi sunt ipsa mollitia quod ipsum itaque aliquam vitae. Atque assumenda incidunt, vitae alias non deserunt maiores tempore sequi vel.</p>
        </div>
        <div className="container">
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <div className="question-container">
                <h4>How Does Driving School Working <img src={arrow} alt=""/></h4>
                <div className="desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed velit dicta odio nesciunt reiciendis! Provident incidunt veritatis debitis quod illo eum repellendus, in omnis alias quis, voluptatem vero qui eligendi temporibus, inventore laboriosam necessitatibus non sed rem nobis quibusdam eveniet ipsam. Distinctio perferendis consequuntur, sit deleniti omnis quam eius!</p>
                </div>
            </div>
            <p className="contact-p">You cant found Your Answer, <NavHashLink is='' to="/#contact-us">Contact Us</NavHashLink></p>
        </div>
    </div>
    )
}

export default FaqsSection
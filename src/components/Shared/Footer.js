import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer-area bg-dark text-white p-4">
            <div className="container">
                <div className="row">
                    <div className="edu-title col">
                        <h3>Fitness Zone</h3>
                        <p>Fitness is the key of health.Stay fitness ans stay healthy.We Provide best Service in our organization</p>
                        <div className="icon mt-5">
                            <i style={{color:'#00c4ff'}} className="fab fa-facebook-square"></i>
                            <i style={{color:'salmon'}} className="fab fa-instagram-square"></i>
                            <i style={{color:'#0dc7ff'}} className="fab fa-twitter-square"></i>
                            <i style={{color:'#1d58ff'}} className="fab fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="latest-course-footer col">
                        <h3>Male Excersise Fitness</h3>
                        <p>Kick Boxing Services</p>
                        <p>Website Development</p>
                        <p>Cardiio Center</p>
                        <p>Power yoga</p>
                        <p>Meditation</p>
                    </div>
                    <div className="newsletter-footer col">
                        <h3>Newsletter</h3>
                        <p>Subscribe Our Newsletter to Get more Update and join Our Course Information</p>
                        <input type="text" placeholder="Enter Your Email"/>
                        <button className="btn bg-info">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
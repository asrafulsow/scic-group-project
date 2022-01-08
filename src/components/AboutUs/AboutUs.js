import React from 'react';
import './AboutUs.css'
import aboutimg from '../../pic/img3.png';

const AboutUs = () => {
    // s
    return (
        <div>
            <div className="About-us">
                <h1 className="about-hed">About Us</h1>
            </div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>ABOUT GYMFIT</h1>
                        <p>Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta. Duis purus sapien, blandit non sem quis, mollis vehicula sapien. Fusce mollis mauris vitae enim varius scelerisque id id ex. Maecenas vel iaculis purus, a ornare quam. Sed a mi mattis, posuere mauris et, mollis lacus. Vivamus in imperdiet libero, at dapibus eros. In varius lacinia gravida. Aenean dignissim nulla nibh, a laoreet ligula fermentum sit amet.</p>
                        <button className="btnabout">Read More</button>
                    </div>
                    <div className="col-md-6">
                        <div className="img-area">
                            <img style={{width: '80%'}} src={aboutimg} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;
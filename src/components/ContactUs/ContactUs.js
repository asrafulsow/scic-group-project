import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <div className="contact-area">
            <div className="top-contact-us" id="overlay">
                <h1 className="main-he">Contac Us</h1>
            </div>
            <div className="contact-information p-5">
                <h1 className="text-center main-he">Lets starts a Conversation</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="contact-details col">
                            {/* s */}
                            <h3>Ask how we can help you</h3>
                            <p className="mt-3">see our platform in action</p>
                            <h5 className="mt-3">Best Fitness Club</h5>
                            <p className="fw-bold mt-3">we prvide best service</p>
                            <li>We Provide Male excersise fitness</li>
                            <li>Kick boxing service</li>
                            <li>Cardio center</li>
                            <li>1 Hour Mans Corporate Yoga Session</li>

                            <div className="information mt-4">
                                <p className="mt-5">Brand Of Life</p>
                                <p>45 Market Street</p>
                                <p>South Esat 8579</p>
                                <p>Bangladesh</p>
                                <p>+85465386</p>
                                <p>asdfekf@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-form col">
                            <h4 className="mb-5">Please note all fild are Require</h4>
                            <form action="" className="input-area-contact">
                                <p>Email</p>
                                <input type="eamil" placeholder="Email"/>
                                <p>Password</p>
                                <input type="password" placeholder="password" />
                                <div className="text-area mt-3">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write"></textarea>
                                </div>
                                <button className="btn btn-info">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        </div>
    );
};

export default ContactUs;
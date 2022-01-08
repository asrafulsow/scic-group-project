import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../pic/img1.png"
import img2 from '../../pic/img2.png'
import img3 from '../../pic/img3.png'
import yoga from '../../pic/yogan.jpg'
import Services from '../Services/Services';
import './Home.css'

const Home = () => {

    const [users, setUser] = useState([])

    useEffect( () =>{

        fetch('./fitness.JSON')
        .then(res => res.json())
        .then(data => setUser(data))

    },[])

//  s
    return (
        <div>
            <div className="carousel-area">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>SHAPE YOUR PERFECT BODY</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>GET BODY IN SHAPE AND STAY HEALTHY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>START YOUR FITNESS JOURNEY TODAY</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="services-area p-5">
                <div className="container">
                    <div className="services-top text-center">
                        <h1>WE PROVIDE BEST SERVICES</h1>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div>
                        <div className="row">
                            {
                                users.map(user => <Services 
                                    key = {user.id}
                                    user = {user}
                                    ></Services>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="maintain-area p-4">
                <div className="container">
                    <h1 className="text-center mb-5 text-primary">About Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fst-italic mb-5">YOGA MAINTAINCE THE BEAUTY OF SOUL</h1>
                        <p>Meaning “discipline of force,” hatha yoga is an umbrella under which many of the disciplines fall. In other words, most yoga classes are actually Hatha yoga classes.</p>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h3 className="fst-italic mb-5">CERTIFIED STUDIO</h3>
                                <p>It is a long established fact that a reader.hatha yoga is an umbrella under which many of the disciplines fall. In other words,</p>
                            </div>
                            <div className="col-md-6">
                                <h3 className="fst-italic mb-5">AWARD WINNING</h3>
                                <p>It is a long established fact that a reader.hatha yoga is an umbrella under which many of the disciplines fall. In other words,</p>
                            </div>
                        </div>
                        <hr />
                        <div className="founder text-center">
                            <h1 className='fst-italic'>ALEX JHON MARTIN</h1>
                            <p>FOUNDER OF THE SMART GYM</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={{width: '60%'}} src={yoga} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
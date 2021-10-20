import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = (props) => {
    console.log(props)
    const {id,name, img, duration, description,gender} = props.user;
    console.log(img);
    return (
        <div className="col-md-4">
            <div className="services-single mb-4">
                <img className="rounded-3" style={{width:"100%"}} src={img} alt="" />
                <p className="text-info fw-bold">{duration}</p>
                <h3>{name}</h3>
                <p>Gender: {gender}</p>
                <p>{description.slice(0,250)}</p>
                <Link to = {`/services/${id}/${name}/${description}`}>
                    <button className="btn btn-primary">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;
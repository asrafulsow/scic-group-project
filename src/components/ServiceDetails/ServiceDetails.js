import React from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId, serviceName,description} = useParams()
    return (
        <div>
            <div className="container p-5">
            <h1 className="text-center text-primary">Our Service Details</h1>
                <div className="service-details">
                    <h3>The Services Details {serviceId}</h3>
                    <h1>{serviceName}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
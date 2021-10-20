import React from 'react';
import { Link } from 'react-router-dom';
import eror from '../../pic/ero.png'

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>Opps 404 page not Found</h1>
        	<img style={{width: "80%"}} src={eror} alt="" /><br/>
            <Link to ="/home">
                <div className="btn p-5">
                <button className="btn btn-info">Go Back</button>
                </div>
            </Link>
        </div>
    );
};

export default NotFound;
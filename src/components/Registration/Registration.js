import React, { useState } from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import reg from '../../pic/registration.svg'
import useAuth from '../hooks/useAuth';
import './Registration.css'

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const {signinUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signinUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }


    const handleEmailChange = e =>{
        console.log(e.target.value)
    }

    const handlePassChange = e =>{
        console.log(e.target.value)
    }
    const handelRegistration = e =>{
        console.log(email,password);
        e.preventDefault()
    }
    return (
        <div className="container p-5"> 
            <div className="row">
                <div className="contact-form col-md-6">
                    <h4 className="mb-3">Please note all fild are Require</h4>
                    <form onSubmit={handelRegistration} className="input-area-contact">
                        <p>Frist Name</p>
                        <input type="text" placeholder="Frist Name" />
                        <p>Last Name</p>
                        <input type="text" placeholder="Last Name" />
                        <p>Email</p>
                        <input onBlur={handleEmailChange} type="eamil" placeholder="Email"/>
                        <p>Password</p>
                        <input onBlur={handlePassChange} type="password" placeholder="password" /><br/>
                        <p>Re Password</p>
                        <input type="password" placeholder="Re password" /><br/>
                        <button className="signin-btn mt-3">Submit</button>
                        <button onClick={handleGoogleLogin} className="google-btn mt-2"><i className="fab fa-google"></i> Signin with google</button>
                    </form>
                    <p className="mt-4">Do you have an account? <Link to="/login">Log in</Link></p>
                </div>
                <div className="col-md-6">
                    <img src={reg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Registration;
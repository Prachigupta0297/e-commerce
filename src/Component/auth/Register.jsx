

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from "../features/authSlice";
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const token = sessionStorage.getItem("token");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerHandle = (e) => {
        // console.table(name, email, password);
        // dispatch(signUpUser({ name, email, password }));
        // navigate("/");

        e.preventDefault();
    let userCredential={email, password}
    dispatch(signUpUser(userCredential)).then((result)=>{
        if(result.payload){
            // setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
    }
})
}

//     if(token){
//        return <Navigate to="/home"/>
//    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-10 mt-3'>
                    <h3>Register</h3>
                    <form className='form-group custom-form mt-5 col-md-6 mx-auto' onSubmit={registerHandle}>
                    <div className="form-group mb-2">
                        <label htmlFor='name'>Name</label>
                        <input type='text' className="form-control" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor='email'>Email</label>
                        <input type='email' className="form-control" id="email" placeholder='name@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor='password'>Password</label>
                        <input type='password' className="form-control" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-primary mt-3'>Register</button>
                    <p>You already regiserd so Click <Link to="/" className='text-dark'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3>this is login page </h3>
            <Link to='/registration'>Registration</Link>
        </div>
    );
};

export default Login;
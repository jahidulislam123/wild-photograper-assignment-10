import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Register = () => {
    const[agree,setAgree]=useState(false);
    const navigate =useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigateLogin =()=>{
        navigate('/login')
    }
    if(loading || updating){
        // return <Loading></Loading>
      }

    if(user){
       console.log('user',user);
    }


    const handleRegister =async(event)=>{

       
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // const agree =event.target.terms.checked;
        
         await createUserWithEmailAndPassword(email,password); 
         await updateProfile({ displayName:name });
         console.log('Updated profile');
         Navigate('/home');

    }
  
    return (
        <div>
             <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='your name'/>
                <br />
                <input type="email" name="email" id=""placeholder='your email' required /> 
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />

                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ?'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="">Accept genious Terms and conditions</label>  */}
                <label className={`ps-2 ${agree? '':'text-danger'}`}  htmlFor="">Accept genious Terms and conditions</label> 

                <input 
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-2'
                 type="submit"
                  value="register"
                  
                  />


            </form>
          <p>
          Already have an account?  <Link to="/login" className='text-danger  pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link>
          </p>
          <SocialLogin></SocialLogin>

        </div>
        </div>
    );
};

export default Register;
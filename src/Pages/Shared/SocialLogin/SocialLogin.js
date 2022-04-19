import React from 'react';
import google from '../../../images/social/google.png'

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';






const SocialLogin = () => {
    const navigate =useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement ;

    if (error) {
       
        <p>Error: {error.message}</p>
          
      }
      if(loading ){
        return <Loading></Loading>
      }
      if(user){
          navigate('/home');
      }
    
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div  style={{height:'1px'}} className='bg-primary w-50'> </div>
                <p className='mt-2 px-2'>or</p>
                <div  style={{height:'1px'}} className='bg-primary w-50'> </div>
            </div >
            {errorElement}

            <div>
            <button onClick={()=>signInWithGoogle()}  className='btn d-block  btn-info w-50 mx-auto my-2'>
                <img style={{width:'30px'}}  src={google} alt="" />
                <span className='px-2'>Google Sign In</span>

                </button>
            
           
            </div>
        </div>
    );
};

export default SocialLogin;
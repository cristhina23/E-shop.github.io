import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title='Login' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    placeholder ='Email' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input 
                    type='password' 
                    name='password' 
                    placeholder ='Password' className='form-control' />
                </div>
                <div>
                  <Link to='/forgot-password'>Forgot Password</Link>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button' type='submit'>Login</button>
                    <Link to='/signup' className='button signup'>SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  )
}

export default Login
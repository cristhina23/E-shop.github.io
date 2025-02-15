import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Resetpassword = () => {
  return (
    <>
      <Meta title={'Reset Password'} />
      <BreadCrumb title='Reset Password' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Reset Password</h3>
              <form action='' className='d-flex flex-column gap-15'>
                
                <div className='mt-1'>
                  <input 
                    type='password' 
                    name='password' 
                    placeholder ='Password' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input 
                    type='password' 
                    name='confpassword' 
                    placeholder ='Confirm Password' className='form-control' />
                </div>
                <div>
                
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button'>Ok</button>
                  
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

export default Resetpassword
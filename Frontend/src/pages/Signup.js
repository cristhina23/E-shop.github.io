import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Signup = () => {
  return (
    <>
      <Meta title={'Sign Up'} />
      <BreadCrumb title='Sign Up' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Sign Up</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type='text' 
                    name='name' 
                    placeholder ='Name' className='form-control' />
                </div>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    placeholder ='Email' className='form-control' />
                </div>
                <div>
                  <input 
                    type='tel' 
                    name='mobile' 
                    placeholder ='Mobile Number' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input 
                    type='password' 
                    name='password' 
                    placeholder ='Password' className='form-control' />
                </div>
                <div>
                
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button'>Sign Up</button>
                  
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


export default Signup
import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Blog1 from '../images/blog-1.jpg';
import { BiArrowBack } from 'react-icons/bi';
import Container from '../components/Container';

function Singleblog ()  {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title='Dynamic Blog Name' />

      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'><BiArrowBack className='fs-4'/>Go back to Blogs</Link>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={Blog1} className='img-fluid w-100 my-4' alt='blog'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            
          </div>
        
      </Container>
    </>
  )
}

export default Singleblog
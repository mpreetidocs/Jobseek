import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'
const HowItWorks = () => {
  return (
    <div className='howitworks'>
      
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate veniam
               tenetur officiis debitis expedita.</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find a Job</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate veniam
               tenetur officiis debitis expedita.</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>Find a Job</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate veniam
               tenetur officiis debitis expedita.</p>
          </div>
        </div>
      </div>
    
       </div>
  )
}

export default HowItWorks
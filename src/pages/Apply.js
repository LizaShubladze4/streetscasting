import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../styles/Apply.css'
import { ContactUs } from '../components/Email';

const Apply = () => {
  return (
    <div className='apply-page'>
      <section className='apply-header'>
        <Link to='/'><h1>streetscasting</h1></Link>
      </section>
      <section><h2>apply</h2></section>
      <section className='form'>
        <ContactUs />
      </section>
    </div>
  )
}

export default Apply;
import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../styles/Philosophy.css'

const Philosophy = () => {
  return (
    <div className='philosophy'>
      <section className='philosophy-header'>
        <Link to='/'><h1>streetscasting</h1></Link>
      </section>
      <section><h2>philosophy</h2></section>
      <section className='text'>
        <p>
        STREETSCASTING is a nontraditional casting agency. 
        One of the main goals of STREETSCASTING is to create a friendly and safe environment for everyone involved in the work process. 
        The agency is based in Georgia, a country known for its homophobia, transphobia, and sexism. 
        Streetscasting is queer and feminist, because all participants share the values of equality and freedom. 
        The agency aims to be inclusive and to make fashion and production inclusive as well. 
        STREETSCASTING is political and stands by its rules, because it believes that everyone should be united and stand strong by their beliefs and responsibilities to achieve a better world.
        <br />
        <br />
        <br />
        The agency's passion lies in uniqueness and diversity. 
        Nobody funds an agency. 
        It relies on its small income and the owner's and friends' SUPPORT to operate.
        <br />
        <br />
        <br />
        How we work: 
        We create because we love it, not because we have to.
        <br />
        <br />
        <br />
        Our agency operates in two ways: we have a pool of talented individuals, and we work as a scout agency. 
        Streetscasting does not take a percentage from a talent. 
        Instead, the agency charges a fee that is determined by the employer's request. 
        </p>
      </section>
    </div>
  )
}

export default Philosophy;
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <section className='home-header'>
        <Link to='/'><h1>streetscasting</h1></Link>
      </section>
      <section className='navbar'>
        <section className='cast'>
          <Link to='/cast'><h2>cast</h2></Link>
        </section>
        <section className='philosophy'>
          <Link to='/philosophy'><h2>philosophy</h2></Link>
        </section>
        <section className='apply'>
          <Link to='/apply'><h2>apply</h2></Link>
        </section>
      </section>
    </div>
  )
}

export default Home;
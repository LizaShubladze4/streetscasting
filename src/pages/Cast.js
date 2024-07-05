import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../styles/Cast.css'
import MARIA from '../assets/CAST/MARIA.jpg'
import SALOME from '../assets/CAST/SALOME.jpg'
import TINA from '../assets/CAST/TINA.jpg'
import ELENI from '../assets/CAST/ELENI.jpg'
import MANISH from '../assets/CAST/MANISH.jpg'
import MISA from '../assets/CAST/MISA.jpg'
import ANDRIA from '../assets/CAST/ANDRIA.jpg'
import DESTINY from '../assets/CAST/DESTINY.jpg'
import SANI from '../assets/CAST/SANI.jpg'
import JOJO from '../assets/CAST/JOJO.jpg'
import NIKA from '../assets/CAST/NIKA.jpg'
import TEMO from '../assets/CAST/TEMO.jpg'
import SATO from '../assets/CAST/SATO.jpg'


const Cast = () => {
  return (
    <div className='cast'>
      <section className='cast-header'>
        <Link to='/'><h1>streetscasting</h1></Link>
      </section>
      <section><h2>cast</h2></section>
      <section className='container'>
        <div className='box'>
          <img src={MARIA} alt="MARIIA" />
          <h3>mariia</h3>
        </div>
        <div className='box'>
          <img src={SALOME} alt="SALOME" />
          <h3>salome</h3>
        </div>
        <div className='box'>
          <img src={TINA} alt="TINA" />
          <h3>tina</h3>
        </div>
        <div className='box'>
          <img src={ELENI} alt="ELENI" />
          <h3>eleni</h3>
        </div>
        <div className='box'>
          <img src={MANISH} alt="MANISH" />
          <h3>manish</h3>
        </div>
        <div className='box'>
          <img src={MISA} alt="MISA" />
          <h3>misa</h3>
        </div>
        <div className='box'>
          <img src={ANDRIA} alt="ANDRIA" />
          <h3>andria</h3>
        </div>
        <div className='box'>
          <img src={DESTINY} alt="DESTINY" />
          <h3>destiny</h3>
        </div>
        <div className='box'>
          <img src={SANI} alt="SANI" />
          <h3>sani</h3>
        </div>
        <div className='box'>
          <img src={JOJO} alt="JOJO" />
          <h3>jojo</h3>
        </div>
        <div className='box'>
          <img src={NIKA} alt="NIKA" />
          <h3>nika</h3>
        </div>
        <div className='box'>
          <img src={TEMO} alt="TEMO" />
          <h3>temo</h3>
        </div>
        <div className='box'>
          <img src={SATO} alt="SATO" />
          <h3>sato</h3>
        </div>
      </section>
    </div>
  )
}

export default Cast;
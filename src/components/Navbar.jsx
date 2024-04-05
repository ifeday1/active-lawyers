import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div>
      <div className='header'>
        <nav className='navbar'>
          <NavLink to='/'>
            <div>
              <img src='' alt='logo' />
            </div>
          </NavLink>

          <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: '#ffffff' }} />
            ) : (
              <FaBars size={30} style={{ color: '#ffffff' }} />
            )}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li> */}
            <li className='nav-item'>
              <NavLink to='/' onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/legal-services' onClick={closeMenu}>
                Legal services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/partners' onClick={closeMenu}>
                Partners
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            <a href='#form' onClick={closeMenu}>
              <button className=' bg-gold hover:bg-dark text-white font-bold py-2 px-4 rounded'>
                To get a consultation
              </button>
            </a>
            <a href='#privilege' onClick={closeMenu}>
              <button className=' mt-3 md:mt-0 ml-0 md:ml-3 bg-gold hover:bg-dark text-white font-bold py-2 px-4 rounded'>
                Join the Privilege club
              </button>
            </a>
          </ul>

          {/* <div className=' '>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              To get a consultation
            </button>
            <button className=' ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Join the Privilege club
            </button>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

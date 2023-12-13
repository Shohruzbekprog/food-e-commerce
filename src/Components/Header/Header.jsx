/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React  from 'react'

import { Container } from 'reactstrap'
import Logo from '../../assets/image/res-logo.png'
import { NavLink, Link } from 'react-router-dom'

import '../../Styles/Header.css'
import { useRef } from 'react'


const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'AllFoods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },

]


const Header = () => {
  
const menuRef = useRef(null)
const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return <header className="header">

  <Container >
    <div className="nav__wrapper d-flex align-items-center justify-content-between">
      <div className="logo">
        <Link to='/home'><img  src={Logo} alt="" /></Link>
        <h5>Tasty Treat</h5>
      </div>
      {/* {======== menu ========} */}
      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <div className="menu d-flex align-items-center gap-5">


        {
         nav__links.map((item, index) => (
          <NavLink
          onClick={toggleMenu}
          to={item.path} key={index}
          className={nav__Class => nav__Class.isActive ? 'active__menu' : ''}
          
          
          >{item.display}</NavLink>
         ))
        }

        </div>
      </div>
      {/* nav icons */}
      <div className="nav__right d-flex align-items-center gap-4">
        <span className="cart__icon ">
        <Link to='/cart'><i class="ri-shopping-basket-line"></i></Link>
        <span className="cart__badge">2</span>
        </span>
        <span className="user">
          <Link to='/login'><i class="ri-user-line"></i></Link>
        </span>
        <span className="mobile__menu" onClick={toggleMenu}>
        <i class="ri-menu-line"></i>
        </span>
      </div>
    </div>
  </Container>

  </header>
}

export default Header

/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Col, List, ListGroup, ListGroupItem,  } from 'reactstrap'
import Logo from '../../assets/image/res-logo.png'

import'../../Styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className=" footer__logo text-start">
        <img  src={Logo} alt="" />
        <h5>Tasty Treat</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam quaerat ea nobis dolorem accusantium.</p>
      </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Delivery Time</h5>
          <ListGroup className='deliver__time-list'>
            <ListGroupItem className='delvery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delvery__time-item border-0 ps-0'>
            <span>Friday - Saturday</span>
             <p>Off day</p>
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Contact</h5>
          <ListGroup className='deliver__time-list'>

          <ListGroupItem className='delvery__time-item border-0 ps-0'>
              <p>Location: Tashkent Yunusabad</p>
            </ListGroupItem>
            <ListGroupItem className='delvery__time-item border-0 ps-0'>
              <span>Phone: +998 (94) 048 67 17</span>
            </ListGroupItem>

            <ListGroupItem className='delvery__time-item border-0 ps-0'>
            <span>Email: shokhruz.akhe@gmail.com</span>
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>NewsLetter</h5>
        <p>Subscribe our NewsLetter</p>
        <div className="newsletter">
          <input type="email"  placeholder='Enter your email'/>
          <span><i class="ri-send-plane-line"></i></span>
        </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>Copyright - 2023, website made by Shohruzbek</p>
         </Col>
        <Col lg='6' md='6'>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow: </p>
            <span><Link to='https://www.instagram.com/shokhruz.akhe/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg=='><i class="ri-instagram-line"></i></Link></span>
            <span><Link to='https://t.me/shokhruzakhe'><i class="ri-telegram-fill"></i></Link></span>
          </div>
         </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer

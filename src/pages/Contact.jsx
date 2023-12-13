/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'


const Contact = () => {
  return <Container >
    <h1 className='text-center pb-5 pt-5'>Tasty Teat <span><Link  to='https://t.me/shokhruzakhe'><i class="ri-telegram-fill"></i></Link></span></h1>
    <h3 className=' text-center'>Andijon, Yangi Bozor 5, Tasty Teat M.CH.J</h3>
    <h5 className='text-center'>Phone: 998(94) 048 67 17 <span><i class="ri-customer-service-2-line"></i></span></h5>
    <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Repellendus aut sint nemo ad dicta voluptas ipsa hic dolorum ipsam eaque.</p>
  </Container>
}

export default Contact

import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import Subscribe from '../mainPage/subscribe/subscribe'
import Eror404 from './eror404/eror404'


function NotFound() {
  return (
    <>
      <Eror404 />
      <Subscribe />
    </>
  )
}

export default NotFound
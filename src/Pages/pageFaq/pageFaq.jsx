import React from 'react'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Main from './mainFaq/mainFaq'
import Navigation from './navigation/navgitaion'
import Subscribe from '../mainPage/subscribe/subscribe'

function PageFaq() {
  return (
    <>
      <Navigation/>
      <Main />
      <Subscribe />
    </>
  )
}

export default PageFaq
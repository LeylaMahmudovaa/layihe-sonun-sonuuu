import React from 'react'
import Style from './mainFaq.module.css'
import Faq from '../../About/FAQ/faq'

import Image from '../../../assets/TeamsConditions/Image.png'
import Image2 from '../../../assets/TeamsConditions/Image2.png'

function MainFaq() {
  return (
    <section className={Style.container} >
      <img src={Image}/>
      <Faq/>
      <img src={Image2}/>
    </section>
  )
}

export default MainFaq
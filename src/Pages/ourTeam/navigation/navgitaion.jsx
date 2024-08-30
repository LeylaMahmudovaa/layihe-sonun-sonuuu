import React from 'react'

import Style from './navigation.module.css'

import light from '../../../assets/AboutPage/navigation/light.png'

function Navgitaion() {
  return (
    <section className={Style.container}>
      <h1>Our Team</h1>
      <img src={light} />
      <p>Home &gt;  Our Team</p>


      <hr />
    </section>
  )
}

export default Navgitaion
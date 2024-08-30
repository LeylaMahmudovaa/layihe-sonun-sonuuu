import React from 'react'

import Style from './navigation.module.css'

import light from '../../../assets/AboutPage/navigation/light.png'

function Navgitaion() {
  return (
    <section className={Style.container}>
      <h1>Contact Us</h1>
      <img src={light} />
      <p>Home &gt;  Contact Us</p>
      <hr />
    </section>
  )
}

export default Navgitaion
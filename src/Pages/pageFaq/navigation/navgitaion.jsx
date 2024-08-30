import React from 'react'

import Style from './navigation.module.css'

import light from '../../../assets/AboutPage/navigation/light.png'

function Navgitaion() {
  return (
    <section className={Style.container}>
      <h1>FAQ</h1>
      <img src={light} />
      <p>Home &gt;  FAQ</p>

      <hr />
    </section>
  )
}

export default Navgitaion
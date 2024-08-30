import React from 'react'

import Style from './map.module.css'

import MAP from '../../../assets/ContactPage/Basemap image.png'

function Map() {
    return (
        <section className={Style.container}>
            <img src={MAP} />
        </section>
    )
}

export default Map
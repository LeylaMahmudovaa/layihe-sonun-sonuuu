import React from 'react'

import Style from './getInTouch.module.css'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'
import image from '../../../assets/ContactPage/Image.png'


function GetInTouch() {
    return (
        <section className={Style.container}>

            <img src={image} />


            <div className={Style.text}>
                <span>CONTACT US</span>
                <h3>Get in Touch</h3>
                <p>At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>

                <div className={Style.sendMessage}>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone Number' />
                    <input type="text" placeholder='Message' />

                </div>

                <div className={Style.BTN}>
                    <GradientBTN text={'SEND MESSAGE'} />
                </div>


            </div>

        </section>
    )
}

export default GetInTouch
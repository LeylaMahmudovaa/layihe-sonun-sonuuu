import React from 'react'

import Style from './eror404.module.css'
import GradientBTN from '../../../components/gradientBTN/gradientBTN'

import image from '../../../assets/page404/Image.png'
import { Link } from 'react-router-dom'

function Eror404() {
    return (
        <section className={Style.container}>
            <div className={Style.text}>
                <span>404 Error</span>
                <h3>Page Not Found</h3>
                <div>
                    <p>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>
                    <ul>
                        <li>The page may have been moved or deleted.</li>
                        <li>You may have mistyped the URL.</li>
                        <li>There may be a temporary problem with our server.</li>
                    </ul>
                    <p>You can try the following options to find what you're looking for:</p>
                    <ul>
                        <li>Check the URL for typos or errors and try again.</li>
                        <li>Go back to our homepage and browse from there.</li>
                    </ul>
                </div>
                <p>If you believe there's an issue with our website, please contact us using the information provided on our contact page.</p>

                <Link  to={'/'} className={Style.BTN}>
                    <GradientBTN text={'BACK HOME'} />
                </Link>

            </div>

            <img src={image} />


        </section>
    )
}

export default Eror404
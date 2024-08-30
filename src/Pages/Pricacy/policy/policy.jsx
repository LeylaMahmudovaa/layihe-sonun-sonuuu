import React from 'react'

import Style from './policy.module.css'
import image from '../../../assets/TeamsConditions/Image.png'
import image2 from '../../../assets/TeamsConditions/Image2.png'

function Policy() {
    return (
        <section className={Style.container}>
            <img src={image} />

            <div className={Style.text}>
                <span>Privacy Policy</span>
                <h3>Privacy Policy</h3>

                <p>This Privacy Policy describes how [Company Name] collects, uses, and protects the personal information of our website visitors and customers.</p>

                <div>
                    <h5>Information We Collect</h5>
                    <p>We may collect the following types of personal information:</p>
                    <ul>
                        <li>Name, email address, and other contact information.</li>
                        <li>Demographic information such as age, gender, and location.</li>
                        <li>Payment information such as credit card details.</li>
                        <li>Information about how you use our website and services.</li>
                    </ul>
                </div>

                <div>
                    <h5>How We Use Your Information</h5>
                    <p>We may use your personal information for the following purposes:</p>

                    <ul>
                        <li>To provide you with our services and products.</li>
                        <li>To process payments and fulfill orders.</li>
                        <li>To send you marketing and promotional materials.</li>
                        <li>To improve our website and services.</li>
                    </ul>
                </div>

                <div>
                    <h5>How We Protect Your Information</h5>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.</p>
                </div>

                <div>
                    <h5>Information Sharing</h5>
                    <p>We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.</p>
                </div>

                <div>
                    <h5>Cookies and Tracking</h5>
                    <p>We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.</p>
                </div>

                <div>
                    <h5>Your Rights</h5>
                    <p>You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.</p>
                </div>

                <div>
                    <h5>Changes to Privacy Policy</h5>
                    <p>We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
                </div>

                <div>
                    <h5>Contact Us</h5>
                    <p>If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.</p>
                </div>

            </div>


            <img src={image2} />
        </section>
    )
}

export default Policy
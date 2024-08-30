import React from 'react'

import Style from './teamsAndConditions.module.css'
import image from '../../../assets/TeamsConditions/Image.png'
import image2 from '../../../assets/TeamsConditions/Image2.png'

function TeamsAndConditions() {
    return (
        <section className={Style.container}>
            <img src={image} />

            <div className={Style.text}>
                <span>Tems & Conditions</span>
                <h3>Terms and Conditions</h3>

                <p>Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services.</p>

                <div>
                    <h5>Acceptance of Term</h5>
                    <p>By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                </div>

                <div>
                    <h5>Use of Website and Services</h5>
                    <p>You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services:</p>

                    <ul>
                        <li>In any way that violates any applicable federal, state, local or international law or regulation.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any other person or entity.</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm [Company Name] or users of the website or services or expose them to liability.</li>
                    </ul>
                </div>

                <div>
                    <h5>Intellectual Property</h5>
                    <p>The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of [Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    You may not use any of our content or materials for commercial purposes without obtaining a license to do so from [Company Name] or its licensors.</p>
                </div>

                <div>
                    <h5>Limitation of Liability</h5>
                    <p>In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.</p>
                </div>

                <div>
                    <h5>Changes to Terms and Conditions</h5>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms.</p>
                </div>

                <div>
                    <h5>Contact Us</h5>
                    <p>If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.</p>
                </div>
            </div>


            <img src={image2} />
        </section>
    )
}

export default TeamsAndConditions
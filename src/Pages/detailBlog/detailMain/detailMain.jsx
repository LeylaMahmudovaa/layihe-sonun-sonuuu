import React from 'react'

import Style from './detailMain.module.css'

import image from '../../../assets/blogDetail/Image.png'
import subImage from '../../../assets/blogDetail/subImage.png'
import subImage2 from '../../../assets/blogDetail/subImage2.png'




function DetailMain() {
    return (
        <section className={Style.container}>
            <h5>VR Architecture</h5>
            <h3>Bringing Designs to Life: How VR is Changing Architecture</h3>
            <span>NASYIYA ULFA | 25 NOV 2022</span>

            <img src={image}  />

            <p>Architecture is an art and science that is constantly evolving with technology. The industry has gone through various transformations over the years, from pencil and paper sketches to computer-aided design (CAD) software. However, one technology that is revolutionizing architecture is virtual reality (VR) design.</p>
            <p>With VR design, architects can bring their designs to life and offer clients an immersive experience that was previously impossible. The technology enables architects to create a virtual representation of their designs, allowing clients to step into the building and explore its features and spaces before it is built.</p>
            <p>VR design is a game-changer for architects and clients alike. It enables architects to design with a greater level of detail and precision, allowing them to identify design flaws and make necessary modifications before construction begins. This not only saves time and money but also ensures that the final product meets the client's expectations.</p>
            <p>Clients can also benefit from VR design by having a better understanding of the design and how it will look and feel in real life. It allows them to experience the design in a more realistic way, helping them make informed decisions and providing valuable feedback to the architects.</p>
            <p>Moreover, VR design is not only limited to the design phase. It can also be used in the construction process to visualize the project's progress and identify any issues that may arise.</p>

            <div className={Style.images}>
                <img src={subImage}  />
                <img src={subImage2}  />
            </div>

            <p>The benefits of VR design in architecture are clear, and the technology is becoming increasingly accessible and affordable. More and more architects and firms are incorporating VR design into their workflows, and the industry is poised for a major transformation.</p>
            <p>In conclusion, VR design is changing the way architects design and bring their projects to life. It is a powerful tool that offers a range of benefits, from increased precision and efficiency in the design phase to better communication and understanding with clients. As the technology becomes more advanced and widespread, we can expect to see more innovative designs and better-designed buildings in the future.</p>


            <div className={Style.tags}>
                <p>Post Tags :</p>

                <span>#VRDesign #ArchitectureInnovation #VirtualRealityArchitecture #BringingDesignsToLife #DesignVisualization #ArchitecturalVisualization #RevolutionizingArchitecture #BuildingInVR #DesignThinking #VRInArchitecture</span>
            </div>

            <div className={Style.share}>
                <p>Share:</p>

                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path d="M18.3572 2.43095C17.6688 2.7369 16.9421 2.92812 16.1772 3.04285C16.9421 2.58392 17.554 1.85728 17.8217 0.97767C17.0951 1.39835 16.292 1.70431 15.4124 1.89553C14.724 1.16889 13.7296 0.709961 12.6588 0.709961C10.5936 0.709961 8.91087 2.3927 8.91087 4.45788C8.91087 4.76383 8.94912 5.03154 9.0256 5.29925C5.92783 5.14628 3.13601 3.65476 1.26205 1.36011C0.956102 1.93377 0.764882 2.54568 0.764882 3.23407C0.764882 4.53437 1.41503 5.68169 2.44762 6.37009C1.83572 6.33184 1.26205 6.17887 0.726638 5.91116V5.9494C0.726638 7.78512 2.02694 9.31488 3.74792 9.65908C3.44197 9.73557 3.09777 9.77381 2.75357 9.77381C2.52411 9.77381 2.2564 9.73557 2.02694 9.69732C2.52411 11.1888 3.9009 12.2979 5.54539 12.2979C4.24509 13.2923 2.63884 13.9042 0.879614 13.9042C0.573661 13.9042 0.267709 13.9042 0 13.8659C1.68274 14.9368 3.63319 15.5487 5.77486 15.5487C12.697 15.5487 16.4832 9.81205 16.4832 4.84032C16.4832 4.68735 16.4832 4.49613 16.4832 4.34315C17.2098 3.84598 17.86 3.19583 18.3572 2.43095Z" fill="white" />
                        </svg>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="21" viewBox="0 0 11 21" fill="none">
                            <path d="M3.42773 20.1305V11.0069H0.357422V7.45117H3.42773V4.82896C3.42773 1.78591 5.28632 0.128906 8.00094 0.128906C9.30127 0.128906 10.4188 0.225719 10.7445 0.26899V3.44916L8.86179 3.45001C7.38543 3.45001 7.09957 4.15156 7.09957 5.18103V7.45117H10.6205L10.1621 11.0069H7.09956V20.1305H3.42773Z" fill="white" />
                        </svg>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M11.8732 2.00535C14.8446 2.00535 15.1965 2.01647 16.3704 2.07C17.0761 2.07864 17.7752 2.20823 18.4372 2.45316C18.9172 2.63829 19.3532 2.9219 19.717 3.28571C20.0808 3.64953 20.3644 4.0855 20.5496 4.56555C20.7945 5.22752 20.9241 5.92659 20.9327 6.63237C20.9857 7.80622 20.9974 8.15811 20.9974 11.1296C20.9974 14.101 20.9863 14.4529 20.9327 15.6267C20.9241 16.3325 20.7945 17.0316 20.5496 17.6936C20.3644 18.1736 20.0808 18.6096 19.717 18.9734C19.3532 19.3372 18.9172 19.6208 18.4372 19.806C17.7752 20.0509 17.0761 20.1805 16.3704 20.1891C15.197 20.2421 14.8452 20.2538 11.8732 20.2538C8.90119 20.2538 8.5493 20.2426 7.37598 20.1891C6.67021 20.1805 5.97114 20.0509 5.30916 19.806C4.82911 19.6208 4.39314 19.3372 4.02932 18.9734C3.66551 18.6096 3.3819 18.1736 3.19677 17.6936C2.95184 17.0316 2.82225 16.3325 2.81361 15.6267C2.76062 14.4529 2.74896 14.101 2.74896 11.1296C2.74896 8.15811 2.76009 7.80622 2.81361 6.63237C2.82225 5.92659 2.95184 5.22752 3.19677 4.56555C3.3819 4.0855 3.66551 3.64953 4.02932 3.28571C4.39314 2.9219 4.82911 2.63829 5.30916 2.45316C5.97114 2.20823 6.67021 2.07864 7.37598 2.07C8.54983 2.017 8.90172 2.00535 11.8732 2.00535ZM11.8732 0C8.85243 0 8.47193 0.0127189 7.28483 0.0667741C6.36115 0.0851465 5.44727 0.260038 4.58207 0.584009C3.83986 0.863648 3.16762 1.30187 2.61223 1.86809C2.0455 2.42368 1.6069 3.09631 1.32709 3.83899C1.00312 4.70419 0.828227 5.61807 0.809855 6.54175C0.75686 7.72779 0.744141 8.10829 0.744141 11.129C0.744141 14.1498 0.756859 14.5303 0.810915 15.7174C0.829287 16.6411 1.00418 17.5549 1.32815 18.4201C1.60765 19.1627 2.04588 19.8353 2.61223 20.391C3.16792 20.9574 3.84054 21.3956 4.58313 21.6751C5.44833 21.9991 6.36221 22.174 7.28589 22.1923C8.47299 22.2453 8.8519 22.2591 11.8742 22.2591C14.8966 22.2591 15.2755 22.2464 16.4626 22.1923C17.3863 22.174 18.3001 21.9991 19.1653 21.6751C19.9044 21.3886 20.5755 20.9511 21.1358 20.3904C21.6961 19.8297 22.1333 19.1583 22.4193 18.4191C22.7432 17.5539 22.9181 16.64 22.9365 15.7163C22.9895 14.5303 23.0022 14.1498 23.0022 11.129C23.0022 8.10829 22.9895 7.72779 22.9354 6.54069C22.9171 5.61701 22.7422 4.70313 22.4182 3.83792C22.1387 3.09534 21.7005 2.42272 21.1341 1.86703C20.5784 1.30068 19.9058 0.862451 19.1632 0.582949C18.298 0.258978 17.3841 0.0840867 16.4605 0.0657143C15.2744 0.0127189 14.8939 0 11.8732 0Z" fill="white" />
                            <path d="M11.8771 5.41406C10.7468 5.41406 9.64187 5.74924 8.70204 6.37722C7.76221 7.00519 7.0297 7.89776 6.59714 8.94204C6.16459 9.98632 6.05141 11.1354 6.27192 12.244C6.49244 13.3526 7.03674 14.371 7.836 15.1702C8.63526 15.9695 9.65358 16.5138 10.7622 16.7343C11.8708 16.9548 13.0199 16.8416 14.0642 16.4091C15.1085 15.9765 16.001 15.244 16.629 14.3042C17.257 13.3643 17.5922 12.2594 17.5922 11.1291C17.5922 9.61337 16.99 8.15973 15.9183 7.08795C14.8465 6.01618 13.3929 5.41406 11.8771 5.41406ZM11.8771 14.8388C11.1434 14.8388 10.4262 14.6212 9.81615 14.2136C9.20609 13.8059 8.73062 13.2266 8.44984 12.5487C8.16906 11.8709 8.0956 11.125 8.23874 10.4054C8.38188 9.68576 8.73519 9.02475 9.254 8.50595C9.7728 7.98714 10.4338 7.63383 11.1534 7.49069C11.873 7.34755 12.6189 7.42101 13.2968 7.70179C13.9746 7.98257 14.554 8.45805 14.9616 9.0681C15.3692 9.67815 15.5868 10.3954 15.5868 11.1291C15.5868 12.113 15.196 13.0565 14.5003 13.7522C13.8046 14.4479 12.861 14.8388 11.8771 14.8388Z" fill="white" />
                            <path d="M17.814 6.52351C18.5516 6.52351 19.1495 5.92559 19.1495 5.18802C19.1495 4.45046 18.5516 3.85254 17.814 3.85254C17.0764 3.85254 16.4785 4.45046 16.4785 5.18802C16.4785 5.92559 17.0764 6.52351 17.814 6.52351Z" fill="white" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DetailMain
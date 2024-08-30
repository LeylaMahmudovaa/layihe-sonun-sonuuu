import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

import logoPNG from '../../assets/navbar/logo/Frame 22.svg';

import TwitterSVG from '../../assets/footer/icons/1.svg';
import FacebookSVG from '../../assets/footer/icons/2.svg';
import InstagramSVG from '../../assets/footer/icons/3.svg';
import GithubSVG from '../../assets/footer/icons/4.svg';

import locationSVG from '../../assets/footer/icons/Location.svg';
import messageSVG from '../../assets/footer/icons/Message.png';
import phoneSVG from '../../assets/footer/icons/Calling.svg';

function Footer() {

  const sm_ = [
    {
      sm_icon: TwitterSVG,
      link: 'https://www.twitter.com'
    },
    {
      sm_icon: FacebookSVG,
      link: 'https://www.facebook.com'
    },
    {
      sm_icon: InstagramSVG,
      link: 'https://www.instagram.com'
    },
    {
      sm_icon: GithubSVG,
      link: 'https://www.github.com'
    },
  ];

  const [sosicalmedia, set_sosicalmedia] = useState(sm_);

  const navItems = {
    Quicklinks: [
      { text: 'Quicklinks', link: '' },
      { text: 'Home', link: '/' },
      { text: 'Pricing Plan', link: '/pricing-plan' },
      { text: 'Service', link: '/services' },
      { text: 'Blog', link: '/blog' },
      { text: 'Our Team', link: '/ourTeam' }
    ],
    Support: [
      { text: 'Support', link: '' },
      { text: 'About us', link: '/about' },
      { text: 'Contact us', link: '/contact' },
      { text: 'FAQ', link: '/faq' }, // Assuming you have a FAQ page
      { text: 'Terms & Conditions', link: '/teams-conditions' },
      { text: 'Privacy Policy', link: '/privacypolicy' }
    ],
    NeedHelp: [
      { icon: '', title: 'Need Help?', link: null },
      { icon: locationSVG, title: 'Tanjung Sari Street no.48, Pontianak City', link: null },
      { icon: messageSVG, title: 'Support@VRNas.com', link: 'mailto:support@vrnas.com' },
      { icon: phoneSVG, title: '+123 456 7890', link: 'tel:+1234567890' }
    ]
  };

  const [items, set_items] = useState(navItems);
  const { Quicklinks, Support, NeedHelp } = items;

  return (
    <section className={styles.container}>
      <div>
        {/* Left */}
        <div className={styles.sosicalMedia}>
          <Link to={'/'} className={styles.brandName}>
            <img src={logoPNG} alt="Logo" />
          </Link>
          <ul className={styles.SM_icons}>
            {sosicalmedia.map((sm, index) => (
              <Link key={index} to={{ pathname: sm.link }} target="_blank" rel="noopener noreferrer">
                <img src={sm.sm_icon} alt={`Social Media ${index + 1}`} />
              </Link>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className={styles.navigation}>
          {/* QuickLinks */}
          <ul>
            {Quicklinks.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>

          {/* Support */}
          <ul>
            {Support.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>

          {/* Need help? */}
          <ul>
            {NeedHelp.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link to={item.link}>
                    <img src={item.icon} alt="" /> {item.title}
                  </Link>
                ) : (
                  <>
                    <img src={item.icon} alt="" /> {item.title}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <p>© Copyright 2023, All Rights Reserved</p>
    </section>
  );
}

export default Footer;

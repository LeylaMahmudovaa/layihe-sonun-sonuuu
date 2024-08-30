import React, { useState } from 'react';
import Style from './navbar.module.css';
import logoPNG from '../../assets/navbar/logo/Frame 22.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'About us',
      link: '/about'
    },
    {
      text: 'Service',
      link: '/services'
    },
    {
      text: 'Page',
      pages: [
        {
          text: 'FAQ',
          link: '/faq'
        },
        {
          text: 'Terms & Conditions',
          link: '/terms-conditions'
        }
      ]
    },
    {
      text: 'Blog',
      link: '/blog'
    }
  ];

  const [items, setItems] = useState(navItems);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePageClick = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className={Style.container}>
      {/* Brand Name */}
      <Link to={'/'} className={Style.brandName}>
        <img src={logoPNG} alt="Logo" />
      </Link>

      <ul className={Style.navItems}>
        {items.map((item, index) => (
          <li key={index} onClick={() => handlePageClick(index)} >
            <Link  className={index === activeIndex ? Style.active : ''}  to={item.link ? item.link : '#'}>
              {item.text}
              {item.pages ? (
                <i className={`fa-solid ${index === activeIndex ? 'fa-angle-down' : 'fa-angle-right'}`}></i>
              ) : null}
            </Link>
            {item.pages && (
              <ul className={index === activeIndex ? Style.active : ''}>
                {item.pages.map((page, pageIndex) => (
                  <li key={pageIndex}>
                    <Link to={page.link}>{page.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <Link to={'/contact'} className={Style.contactUS}>Contact US</Link>

      <div className={Style.burgerMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.66667 4H13.3333V5.33333H2.66667V4ZM5.33333 7.33333H13.3333V8.66667H5.33333V7.33333ZM8.66667 10.6667H13.3333V12H8.66667V10.6667Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

export default Navbar;

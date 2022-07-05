import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import { Divider } from 'semantic-ui-react';
import { CONTACT_US_PATH, DISCLAIMER_PATH, SITEMAP_PATH } from '../routing';

const footerLinks = [
  {
    id: 'siteMap',
    label: 'Sitemap',
    pathname: SITEMAP_PATH,
    className: 'item'
  },
  {
    id: 'disclaimer',
    label: 'Disclaimer',
    pathname: DISCLAIMER_PATH,
    className: 'item'
  },
  {
    id: 'contactUs',
    label: 'Contact',
    pathname: CONTACT_US_PATH,
    className: 'item'
  }
];

const Footer: React.FC = () => {
  const heart = (
    <svg className="heart" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      />
    </svg>
  );

  return (
    <footer className="ui inverted vertical footer segment">
      <Divider hidden />

      <div className="ui center aligned container">
        <img
          src="../img/logo-mark.svg"
          alt="logo"
          className="ui centered mini image"
        />

        <div className="ui inverted small horizontal divided link list">
          {footerLinks.map(link => {
            const { id, label, pathname, className } = link;

            return (
              <span key={id} className={className}>
                <NavLink to={pathname} exact>
                  {label}
                </NavLink>
              </span>
            );
          })}
        </div>
      </div>

      <Divider hidden />

      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <p className="item">
            <span>Made with {heart} by &nbsp;</span>
            <a
              href="https://olegchursin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oleg Chursin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

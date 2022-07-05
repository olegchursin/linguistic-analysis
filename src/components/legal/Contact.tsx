import React from 'react';

// @ts-ignore
import { Divider } from 'semantic-ui-react';

import ContactHeader from './ContactHeader';

const contactLinks = [
  {
    id: 'site',
    label: 'olegchursin.com',
    href: 'https://olegchursin.com',
    icon: ''
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/olegchursin',
    icon: ''
  }
];

const Contact: React.FC = () => {
  return (
    <div>
      <ContactHeader />
      <div className="ui main text container main-content">
        <Divider section hidden />
        <h2>Oleg Chursin</h2>
        <p>Ideation | UX/UI | Dev</p>
        <div>
          {contactLinks.map(link => {
            const { id, label, href } = link;

            return (
              <p>
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </p>
            );
          })}
        </div>
      </div>
      <Divider section hidden></Divider>
    </div>
  );
};

export default Contact;

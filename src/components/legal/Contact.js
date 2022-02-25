import React from 'react';

import { Divider } from 'semantic-ui-react';

import ContactHeader from './ContactHeader';

const Disclaimer = () => {
  return (
    <div>
      <ContactHeader />
      <div className="ui main text container main-content">
        <Divider section hidden />
        <h2>Oleg Chursin</h2>
        <p>Ideation / UX/UI / Development</p>
        <p>
          <a
            href="mailto:olegchursin@gmail.com?Subject=Hi%20Oleg"
            target="_top"
          >
            olegchursin@gmail.com
          </a>
        </p>
      </div>
      <Divider section hidden></Divider>
    </div>
  );
};

export default Disclaimer;

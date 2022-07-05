import React from 'react';

// @ts-ignore
import { Divider } from 'semantic-ui-react';

import DisclaimerHeader from './DisclaimerHeader';

const currentYear = new Date().getFullYear();

const Disclaimer: React.FC = () => {
  return (
    <div>
      <DisclaimerHeader />
      <div className="ui main text container main-content">
        <Divider section hidden />
        <p>
          All the information published on this website, or in any article
          herein is true and accurate to the best of the authors’ knowledge.
          Information on this site should not be a substitute for legal advice.
          No liability is assumed for losses suffered by any person or
          organisation relying directly or indirectly on information published
          on this site.
        </p>
        <p>
          Views expressed in any page/article are the views of the authors
          individually.
        </p>
        <p>© olegchursin {currentYear}.</p>
      </div>
      <Divider section hidden />
    </div>
  );
};

export default Disclaimer;

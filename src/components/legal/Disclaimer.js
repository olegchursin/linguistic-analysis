import React from 'react';

import { Divider } from 'semantic-ui-react';

import DisclaimerHeader from './DisclaimerHeader';

const Disclaimer = () => {
  return (
    <div>
      <DisclaimerHeader />
      <div className="ui main text container main-content">
        <Divider section hidden />
        <p>
          The provided agreements on www.linguisti.co are for informational
          purposes only and do not constitute legal advice.
        </p>
        <p>
          Linguisti.co is not a law firm and is not providing legal advice. All
          information (including agreements, forms and documents) available on
          Our Site, www.linguisti.co, are provided without any warranty, express
          or implied, including as to their legal effect and completeness. The
          information should be used as a guide and modified to meet your own
          individual needs and the laws of your state. Your use of any
          information or forms is at your own risk. Linguisti.co disclaims any
          warranty: it is not creating or entering into any Attorney-Client
          relationship by providing information to you.
        </p>
        <p>
          Communications between you and Linguisti.co is NOT protected by the
          attorney-client privilege since Linguisti.co is not a law firm and is
          not providing legal advice. No employee of TermsFeed, contractor, or
          attorney is authorized to provide you with any advice about what
          information (including agreements, forms and documents) to use or how
          to use or how to complete them.
        </p>
      </div>
      <Divider section hidden></Divider>
    </div>
  );
};

export default Disclaimer;

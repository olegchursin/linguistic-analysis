import React from 'react';
import { Message } from 'semantic-ui-react';

const ExpiredApi = ({ apiLabel }) => {
  return (
    <Message info>
      <Message.Header>Expired API Key</Message.Header>
      <p>Unfortunately, {apiLabel} API Key has expired. Sorry.</p>
    </Message>
  );
};

export default ExpiredApi;

import React from 'react';
// @ts-ignore
import { Message } from 'semantic-ui-react';

interface ExpiredApiProps {
  apiLabel: string;
}

const ExpiredApi: React.FC<ExpiredApiProps> = ({ apiLabel }) => {
  return (
    <Message info>
      <Message.Header>Expired API Key</Message.Header>
      <p>Unfortunately, {apiLabel} API Key has expired. Sorry.</p>
    </Message>
  );
};

export default ExpiredApi;

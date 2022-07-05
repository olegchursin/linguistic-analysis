import ApiList from './ApiList';
import Cta from './Cta';
import Hero from './Hero';
import React from 'react';
import Services from './Services';
// @ts-ignore
import { Divider } from 'semantic-ui-react';

const MainContainer: React.FC = () => {
  const divider = <Divider section hidden />;

  return (
    <div>
      <Hero />
      {divider}
      <Services />
      {divider}
      <ApiList />
      {divider}
      <Cta />
    </div>
  );
};

export default MainContainer;

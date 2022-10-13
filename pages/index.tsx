import type { NextPage } from 'next';
import { Alert } from 'flowbite-react';

const Home: NextPage = () => {
  return (
    <div>
      Home
      <Alert color="info">Alert!</Alert>
    </div>
  );
};

export default Home;

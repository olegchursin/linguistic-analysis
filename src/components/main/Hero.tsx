import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import { Grid, Image, Button } from 'semantic-ui-react';
import { LEXICAL_ANALYSIS_PATH } from '../../routing';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Grid container divided="vertically" centered columns={2}>
        <Grid.Column>
          <h1>Linguistic Analysis</h1>{' '}
          <p>
            Where Natural Language Processing APIs come together to serve your
            lexical, semantic, and text analytics needs.
          </p>
          <Link to={LEXICAL_ANALYSIS_PATH}>
            <Button color="teal">Get started</Button>
          </Link>
        </Grid.Column>
        <Grid.Column className="hero--right-panel">
          <Image src="/img/lp-hero-logo.svg" />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Hero;

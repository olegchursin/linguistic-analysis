import React from 'react';

import { Grid, Step, Divider, Image } from 'semantic-ui-react';

const Cta = () => {
  return (
    <div className="cta">
      <Grid container>
        <Grid.Row textAlign="center" stretched>
          <Grid.Column>
            <h1>Start analyzing</h1>
            <p>
              There is no predefined and restrictively certain way to use our
              services. <br />
              Below is a sample roadmap that may help you start your linguistic
              analysis journey.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Divider hidden></Divider>
        <Step.Group widths={4}>
          <Step href="/text">
            <Image src="../img/logo-full.svg" className="cta-img"></Image>
            <Step.Content>
              <Step.Title>Text Analysis</Step.Title>
              <Step.Description>
                Summarization, sentiment, keyword extraction
              </Step.Description>
            </Step.Content>
          </Step>
          <Step href="/lexical">
            <Image src="../img/logo-full.svg" className="cta-img"></Image>
            <Step.Content>
              <Step.Title>Lexical Analysis</Step.Title>
              <Step.Description>
                Definitions, thesaurus, translations, rhymes
              </Step.Description>
            </Step.Content>
          </Step>
          <Step href="/semantics">
            <Image src="../img/logo-full.svg" className="cta-img"></Image>
            <Step.Content>
              <Step.Title>Semantic Analysis</Step.Title>
              <Step.Description>
                Generate an associative list for a predefined concept
              </Step.Description>
            </Step.Content>
          </Step>

          <Step href="/hashtag">
            <Image src="../img/logo-full.svg" className="cta-img"></Image>
            <Step.Content>
              <Step.Title>Hashtag Analysis</Step.Title>
              <Step.Description>
                Discover what hashtags mean, see hashtag suggestions
              </Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Grid>
    </div>
  );
};

export default Cta;

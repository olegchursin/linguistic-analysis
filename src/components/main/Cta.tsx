import React from 'react';
import { NavLink } from 'react-router-dom';

//@ts-ignore
import { Grid, Step, Divider, Image } from 'semantic-ui-react';
import {
  HASHTAG_ANALYSIS_PATH,
  LEXICAL_ANALYSIS_PATH,
  SEMANTIC_ANALYSIS_PATH,
  TEXT_ANALYSIS_PATH
} from '../../routing';

interface ICtaStep {
  id: string;
  title: string;
  description: string;
  pathname: string;
  imgSrc: string;
  imgClassName: string;
}

const ctaSteps: ICtaStep[] = [
  {
    id: 'lexicalAnalysis',
    title: 'Lexical Analysis',
    description: 'Definitions, thesaurus, translations, rhymes',
    pathname: LEXICAL_ANALYSIS_PATH,
    imgSrc: '../img/logo-full.svg',
    imgClassName: 'cta-img'
  },
  {
    id: 'textAnalysis',
    title: 'Text Analysis',
    description: 'Summarization, sentiment, keyword extraction',
    pathname: TEXT_ANALYSIS_PATH,
    imgSrc: '../img/logo-full.svg',
    imgClassName: 'cta-img'
  },
  {
    id: 'lxicalAnalysis',
    title: 'Semantic Analysis',
    description: 'Generate an associative list for a predefined concept',
    pathname: SEMANTIC_ANALYSIS_PATH,
    imgSrc: '../img/logo-full.svg',
    imgClassName: 'cta-img'
  },
  {
    id: 'hashtagAnalysis',
    title: 'Hashtag Analysis',
    description: 'Discover what hashtags mean, see hashtag suggestions',
    pathname: HASHTAG_ANALYSIS_PATH,
    imgSrc: '../img/logo-full.svg',
    imgClassName: 'cta-img'
  }
];

const Cta: React.FC = () => {
  return (
    <div className="cta">
      <Grid container>
        <Image centered size="small" src="/img/lp-services-img.svg" />

        <Grid.Row textAlign="center" stretched>
          <Grid.Column>
            <h1>Start analyzing</h1>
            <p>
              There is no predefined and restrictively certain way to use our
              services. <br />
              Below is a sample roadmap that will help you start your linguistic
              analysis journey.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Divider hidden />

        <Step.Group widths={4}>
          {ctaSteps.map(step => {
            const { id, title, description, pathname } = step;

            return (
              <Step key={id}>
                <NavLink to={pathname} exact>
                  <Step.Content>
                    <Step.Title>{title}</Step.Title>
                    <Step.Description>{description}</Step.Description>
                  </Step.Content>
                </NavLink>
              </Step>
            );
          })}
        </Step.Group>
      </Grid>
    </div>
  );
};

export default Cta;

import React from 'react'

// Semantic UI
import { Grid, Image, Segment, Divider, Button } from 'semantic-ui-react'

const Services = (props) => {
  return (
    <div className="services" id="lp-services">
      <Grid container columns='equal'>
        <Grid.Row stretched>
          <Grid.Column>
            <h1>Services</h1>
          </Grid.Column>
        </Grid.Row>
        <Divider section hidden />
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic color="blue">
              <h3>Lexical Analysis</h3>
              <p>Investigate words accounting for both their normal usage and creative exploitations to determine the true meaning of an utterance.</p>
              <h5>Tools</h5>
              <p>Definition | Thesaurus | Translation</p>
              <a href="/lexical"><Button basic color="blue">Analyze</Button></a>
            </Segment>
            <Segment basic color="orange">
              <h3>Semantic Analysis</h3>
              <p>Define a conceptual domain and explore a set of lexemes representing it and bearing certain specifiable relations to one another.</p>
              <h5>Tools</h5>
              <p>Associative list | Lexical field</p>
              <a href="/semantics"><Button basic color="orange">Analyze</Button></a>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment basic className="image-segment">
              <Image src='/img/lp-services-img.svg' />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic color="teal">
              <h3>Text Analysis</h3>
              <p>Reveal the sentiment and structure of text using machine learning models powered by leading AI players.</p>
              <h5>Tools</h5>
              <p>Summarization | Sentiment | Keywords</p>
              <a href="/text"><Button basic color="teal">Analyze</Button></a>
            </Segment>
            <Segment basic color="purple">
              <h3>Hashtag Analysis</h3>
              <p>Discover what hashtags mean, see hashtag suggestions for a given lexeme, and streamline your brand's online presence.</p>
              <h5>Tools</h5>
              <p>Hashtag suggestions | Hashtag definition</p>
              <a href="/hashtag"><Button basic color="purple">Analyze</Button></a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

  )
}

export default Services

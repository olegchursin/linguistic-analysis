import React from 'react'
import { Link } from 'react-router-dom'

// Semantic UI
import { Grid, Image, Button } from 'semantic-ui-react'

const Hero = (props) => {
  return (
    <div className="hero">
      <Grid container divided='vertically' centered columns={2}>
        <Grid.Column>
          <h1>Linguistic Analysis</h1>
          <p>Where Natural Language Processing APIs come together to serve your lexical, semantic, and text analytics needs.</p>
          <Link to="/text">
            <Button color='teal'>Get started</Button>
          </Link>
            <a href="https://olegchursin.gitbooks.io/linguistic-analysis/"><Button inverted>Documentation</Button></a>
        </Grid.Column>
        <Grid.Column className="hero--right-panel">
          <Image src='/img/lp-hero-logo.svg' />
        </Grid.Column>
      </Grid>

    </div>
  )
}

export default Hero

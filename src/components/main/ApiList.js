import React from 'react'

// Semantic UI
import { Grid, Button } from 'semantic-ui-react'

const ApiList = (props) => {
  return (
    <div className="api-list">
      <Grid divided container columns='equal'>
        <Grid.Row textAlign='center' stretched className="api-list-row">
          <Grid.Column>
            <h1>APIs Used</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          textAlign='center'
          stretched
          className="api-list-row"
        >
          <Grid.Column>
            <h2>Oxford Dictionary</h2>
            <p>World-renowned dictionary data in an ever-growing list of languages. Based on an intensive language research programme the data is up-to-date, accurate, and reliable and can be quickly and easily incorporated into apps.</p>
            <a href="https://developer.oxforddictionaries.com/">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2>DatumBox</h2>
            <p>Large number of off-the-shelf NLP services which can be used in a broad spectrum of applications including: Sentiment Analysis, Topic Classification, Spam Detection, Keyword and Text Extraction and more.</p>
            <a href="http://www.datumbox.com/machine-learning-api/">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2>Twinword</h2>
            <p>One API for all your text analysis needs. Sentiment Analysis, Topic Tagging, Lemmatizer, and much more. Various NLP tools all with one plan. Use natural language processing to analyze and understand human sentences.</p>
            <a href="https://www.twinword.com">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>

          </Grid.Row>
          <Grid.Row
            textAlign='center'
            stretched
            className="api-list-row"
          >
          <Grid.Column>
            <h2>Yandex Dictionary</h2>
            <p>Detailed dictionary entries compiled automatically using the technologies at the root of the Yandex machine translation system. Entries include the word’s part of speech, and translations.</p>
            <a href="https://tech.yandex.com/dictionary/">
              <Button basic inverted>Learn more</Button>
            </a>

          </Grid.Column>
          <Grid.Column>
            <h2>WordsAPI</h2>
            <p>Words API lets you retrieve information about English words, including definitions, synonyms, rhymes, pronunciation, syllables, and frequency of usage. It also can tell you about relationships between lexemes.</p>
            <a href="https://www.wordsapi.com">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2>TextAnalysis</h2>
            <p>Customized Text Analysis,Text Mining and Text Processing Services. It stands on the giant shoulders of NLP Tools, such as NLTK, TextBlob, Pattern, MBSP and etc. Test the services on the demo website TextAnalysisOnline.</p>
            <a href="http://textanalysisonline.com">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row
          textAlign='center'
          stretched
          className="api-list-row">
          <Grid.Column>
            <h2>Word Associations Network</h2>
            <p>The Word Associations Network API allows developers to embed the ability to find associations for a word or phrase into their mobile apps or web services. Words are grouped by semantics, meaning, and psychological perception.</p>
            <a href="https://wordassociations.net/en/api">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2>TagDef</h2>
            <p>Defining those mysterious, fun and sometimes cryptic words known as hashtags. Tagdef relies on crowd-sourcing to supply the definitions. It is completely free giving you the best data and analytics possible.</p>
            <a href="http://blog.tagdef.com/tagdef-api/">
              <Button basic inverted>Learn more</Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <h2>Urban Dictionary</h2>
            <p>A crowdsourced online dictionary for slang words and phrases. "Definitions" include not only literal definitions, but also descriptions. "To define" on UD does not necessarily entail providing a strict definition.</p>
            <a href="https://www.urbandictionary.com/">
              <Button basic inverted>Learn more</Button>
            </a>

          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ApiList

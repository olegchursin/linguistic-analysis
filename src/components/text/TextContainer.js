import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Form, Divider, Button, Popup, Icon } from 'semantic-ui-react'

// actions
import { keywordsTextAnalysis, sentimentDatumbox, sentimentTwinword, summaryText } from '../../actions/textActions'

// Components
import TextHeader from './TextHeader'
import TextKeywordsTabs from './TextKeywordsTabs'
import TextSentimentTabs from './TextSentimentTabs'
import TextWordCount from './TextWordCount'
import TextSummary from './TextSummary'

class TextContainer extends React.Component {

  state = {
    textInput: ''
  }

  handleChange = (e) => {
    // console.log("e", e.target.value) // works
    this.setState({
      textInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // making a call to textActions.js
    // Keyword Actions
    this.props.keywordsTextAnalysis(this.state.textInput);
    // Sentiment Actions
    this.props.sentimentDatumbox(this.state.textInput);
    this.props.sentimentTwinword(this.state.textInput);
    // Summary Action
    this.props.summaryText(this.state.textInput);
  }

  render () {
    // console.log(this.state.textInput) // works
    return (
      <div>
        <TextHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Powerful tools at your fingertips</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.TextArea
              label='Paste or type in your text below'
              placeholder='Enter text to be analyzed...'
              onChange={this.handleChange}
            />
            <Button basic color='pink' content='Analyze' onClick={this.handleSubmit}/>
          </Form>
          <Divider section hidden />
          <h3>Word Count
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Total number of symbols and words with and without spaces.'
              size='mini'
            />
          </h3>
          <Divider />
          <TextWordCount
            text={this.state.textInput}
          />
          <Divider section hidden />
          <h3>Summary
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Get the text summary at a 30% ratio.'
              size='mini'
            />
          </h3>
          <Divider />
          <TextSummary />
          <Divider section hidden />
          <h3>Sentiment Analysis
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Analyze emotions and tones.'
              size='mini'
            />
          </h3>
          <Divider />
          <TextSentimentTabs />
          <Divider section hidden />
          <h3>Keywords Extraction
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Generate the list of suggested keywords/keyword phrases.'
              size='mini'
            />
          </h3>
          <Divider />
          <TextKeywordsTabs />
          <Divider section hidden />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects // from ./reducers/projectReducer.js
  }
}

export default connect(mapStateToProps, {keywordsTextAnalysis, sentimentDatumbox, sentimentTwinword, summaryText})(TextContainer);

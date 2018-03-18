import React from 'react'
import { Form, Divider, Button } from 'semantic-ui-react'

// Components
import TextHeader from './TextHeader'

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

  render () {
    console.log(this.state.textInput)
    return (
      <div>
        <TextHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Powerful tools at your fingertips</h2>
          <Form>
            <Form.TextArea
              label='Paste or type in your text below'
              placeholder='Enter text to be analyzed...'
              onChange={this.handleChange}
            />
          </Form>
          <Divider hidden />
          <Button.Group widths='3'>
            <Button basic color='teal' content='Key Word Extractor' />
            <Button basic color='violet' content='Sentiment Analysis' />
            <Button basic color='pink' content='Word Count' />
          </Button.Group>
        </div>
      </div>


    )
  }
}

export default TextContainer;

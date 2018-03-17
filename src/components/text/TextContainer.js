import React from 'react'
import { Form, Divider, Button } from 'semantic-ui-react'


class TextContainer extends React.Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render () {
    const { value } = this.state
    return (
      <div className="ui main text container main-content">
        <Divider section hidden />
        <h1>Text Analysis</h1>
        <Form>
          <Form.Input label='Your text title' placeholder='Title...' />
          <Form.TextArea label='Your text content' placeholder='Content...' />
        </Form>
        <Divider hidden />
        <Button.Group widths='3'>
          <Button basic color='teal' content='Key Word Extractor' />
          <Button basic color='violet' content='Sentiment Analysis' />
          <Button basic color='pink' content='Word Count' />
        </Button.Group>
      </div>

    )
  }
}

export default TextContainer;

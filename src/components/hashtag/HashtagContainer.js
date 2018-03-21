import React from 'react'
// import ScrollableAnchor from 'react-scrollable-anchor'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Icon, Popup } from 'semantic-ui-react'
import { Segment, Divider } from 'semantic-ui-react'

// actions
import { hashtagDefinition, hashtagSuggestion } from '../../actions/hashtagActions'
import { addProject } from '../../actions/projectActions'

// Components
import HashtagHeader from './HashtagHeader'
import HashtagDefSearchBar from './HashtagDefSearchBar'
import HashtagSuggestSearchBar from './HashtagSuggestSearchBar'
import HashtagDefinition from './HashtagDefinition'
import HashtagSuggestion from './HashtagSuggestion'

class HashtagContainer extends React.Component {
  state = {
    searchTerm: '',
    suggestInput: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDef = (e) => {
    e.preventDefault()

    // making a call to hashtagActions.js
    // Hashtag Defintion Action
    this.props.hashtagDefinition(this.state.searchTerm);
  }

  handleSuggest = (e) => {
    e.preventDefault()

    this.props.hashtagSuggestion(this.state.suggestInput);
  }

  render () {
    return (
      <div>
        <HashtagHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Hashtag suggestions</h2>
          <p>Generates a list of suggested hashtags with their relative weight.</p>
          <HashtagSuggestSearchBar
            suggestInput={this.state.suggestInput}
            handleChange={this.handleChange}
            handleSuggest={this.handleSuggest}
          />
          <Divider section hidden/>
          <h3>Suggestions
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Get hashtag suggestions for a given word.'
              size='mini'
            />
          </h3>
          <Divider />
          <HashtagSuggestion />
          <Divider section hidden />
          <h2>Hashtag definition</h2>
          <p>We are using <a href="https://tagdef.com/en/">Tagdef.com</a> - the worlds largest user-generated hashtag dictionary, currently containing over 60.000 definitions. Hashtags can have multiple definitions, ordered by user-votes.</p>
          <HashtagDefSearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleDef={this.handleDef}
          />
          <Divider section hidden/>
          <h3>Definition
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Find a meaning of a hashtag.'
              size='mini'
            />
          </h3>
          <Divider />
          <HashtagDefinition />

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

export default connect(mapStateToProps, { hashtagDefinition, hashtagSuggestion })(HashtagContainer);

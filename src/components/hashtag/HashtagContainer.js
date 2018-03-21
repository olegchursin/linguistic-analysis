import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Icon, Popup } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

// actions
import { hashtagDefinition } from '../../actions/hashtagActions'
import { addProject } from '../../actions/projectActions'

// Components
import HashtagHeader from './HashtagHeader'
import HashtagSearchBar from './HashtagSearchBar'
import HashtagDefinition from './HashtagDefinition'

class HashtagContainer extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // making a call to hashtagActions.js
    // Hashtag Defintion Action
    this.props.hashtagDefinition(this.state.searchTerm);
  }

  render () {
    return (
      <div>
        <HashtagHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Enter a hashtag</h2>
          <HashtagSearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
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

export default connect(mapStateToProps, { hashtagDefinition })(HashtagContainer);

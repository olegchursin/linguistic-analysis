import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Icon, Popup } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

// actions
// // actions for Associative array
import { thesaurusSyn, thesaurusAssoc } from '../../actions/dictionaryActions'
import { hashtagSuggestion } from '../../actions/hashtagActions'
// // Project actions
import { addProject } from '../../actions/projectActions'

// Components
import SemanticsHeader from './SemanticsHeader'
import SemanticsSearchBar from './SemanticsSearchBar'

class SemanticsContainer extends React.Component {
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
  }

  render () {
    return (
      <div>
        <SemanticsHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Associative list</h2>
          <p>Generate an interconnected list of lexemes that share a common semantic property within the defined conceptual domain.</p>
          <SemanticsSearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Divider section hidden/>
        </div>
      </div>
    )
  }
}

export default SemanticsContainer;

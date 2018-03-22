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
// import { addProject } from '../../actions/projectActions'

// Components
import SemanticsHeader from './SemanticsHeader'
import SemanticsSearchBar from './SemanticsSearchBar'
import SemanticsAssociativeList from './SemanticsAssociativeList'

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
    // trigger 'hashtagSuggestion' action -- '../../actions/hashtagActions'
    if(this.state.searchTerm) this.props.hashtagSuggestion(this.state.searchTerm);
    // trigger 'thesaurusAssoc' action -- '../../actions/dictionaryActions'
    if(this.state.searchTerm) this.props.thesaurusAssoc(this.state.searchTerm);
    // trigger 'thesaurusSyn' action -- '../../actions/dictionaryActions'
    if(this.state.searchTerm) this.props.thesaurusSyn(this.state.searchTerm);
  }

  render () {
    return (
      <div>
        <SemanticsHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Conceptual domain</h2>
          <p>Generate an interconnected list of lexemes that share a common semantic property within the defined conceptual domain.</p>
          <SemanticsSearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <SemanticsAssociativeList />
          <Divider section hidden />
          <h3>Associative list
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Generate a list of semantically interconnected lexemes by defining your domain above.'
              size='mini'
            />
          </h3>
          <p>An interconnected list of lexemes that share a common semantic property within the defined conceptual domain.</p>
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

export default connect(mapStateToProps, { hashtagSuggestion, thesaurusSyn, thesaurusAssoc })(SemanticsContainer);

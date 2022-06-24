import React from 'react';

import { connect } from 'react-redux';

import { Icon, Popup } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

import {
  hashtagDefinition,
  hashtagSuggestion
} from '../../actions/hashtagActions';

import HashtagHeader from './HashtagHeader';
import HashtagDefSearchBar from './HashtagDefSearchBar';
import HashtagSuggestSearchBar from './HashtagSuggestSearchBar';
import HashtagDefinition from './HashtagDefinition';
import HashtagSuggestion from './HashtagSuggestion';
import ExpiredApi from '../shared/ExpiredApi';

class HashtagContainer extends React.Component {
  state = {
    searchTerm: '', // get hashtag defintion (input: "lol", "oomf", "tgif", etc.)
    suggestInput: '' // get hashtag suggestions (input: lexeme)
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDef = e => {
    e.preventDefault();
    // making a call to '../../actions/hashtagActions'
    // Hashtag Defintion Action
    if (this.state.searchTerm)
      this.props.hashtagDefinition(this.state.searchTerm);
  };

  handleSuggest = e => {
    e.preventDefault();
    // making a call to '../../actions/hashtagActions'
    // Hashtag Suggestions Action
    if (this.state.suggestInput)
      this.props.hashtagSuggestion(this.state.suggestInput);
  };

  get expiredApi() {
    return true;
  }

  render() {
    return (
      <div>
        <HashtagHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Hashtag suggestions</h2>
          <p>
            Generate a list of suggested hashtags with their relative weight.
          </p>

          {this.expiredApi ? (
            <ExpiredApi apiLabel="Hashtag Analysis" />
          ) : (
            <HashtagSuggestSearchBar
              suggestInput={this.state.suggestInput}
              handleChange={this.handleChange}
              handleSuggest={this.handleSuggest}
            />
          )}

          <Divider section hidden />
          <h3>
            Suggestions
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Get hashtag suggestions for a given word."
              size="mini"
            />
          </h3>
          <Divider />
          <HashtagSuggestion />
          <Divider section hidden />
          <h2>Hashtag definition</h2>
          <p>
            We are using <a href="https://tagdef.com/en/">Tagdef.com</a> - the
            worlds largest user-generated hashtag dictionary, currently
            containing over 60.000 definitions. Hashtags can have multiple
            definitions, ordered by user-votes.
          </p>

          {this.expiredApi ? (
            <ExpiredApi apiLabel="Tagdef" />
          ) : (
            <HashtagDefSearchBar
              searchTerm={this.state.searchTerm}
              handleChange={this.handleChange}
              handleDef={this.handleDef}
            />
          )}

          <Divider section hidden />
          <h3>
            Definition
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Find a meaning of a hashtag."
              size="mini"
            />
          </h3>
          <Divider />
          <HashtagDefinition />

          <Divider section hidden />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects // from ./reducers/projectReducer.js
  };
};

export default connect(mapStateToProps, {
  hashtagDefinition,
  hashtagSuggestion
})(HashtagContainer);

import React from 'react';

import { connect } from 'react-redux';

import { Icon, Popup } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

import { associativeList } from '../../actions/semanticsActions';

import SemanticsHeader from './SemanticsHeader';
import SemanticsSearchBar from './SemanticsSearchBar';
import SemanticsAssociativeList from './SemanticsAssociativeList';
import ExpiredApi from '../shared/ExpiredApi';

class SemanticsContainer extends React.Component {
  state = {
    searchTerm: ''
  };

  get expiredApi() {
    return true;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // trigger 'semanticsActions' action -- '../../actions/semanticsActions'
    if (this.state.searchTerm)
      this.props.associativeList(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <SemanticsHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Conceptual domain</h2>
          <p>Define a conceptual domain to generate an associative list.</p>

          {this.expiredApi ? (
            <ExpiredApi apiLabel="Semantic Analysis" />
          ) : (
            <SemanticsSearchBar
              searchTerm={this.state.searchTerm}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}

          <Divider section hidden />
          <h3>
            Associative list
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Generate a list of semantically interconnected lexemes by defining
                        your domain above."
              size="mini"
            />
          </h3>
          <SemanticsAssociativeList />
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

export default connect(mapStateToProps, { associativeList })(
  SemanticsContainer
);

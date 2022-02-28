import React from 'react';

import { connect } from 'react-redux';

import { Loader, Divider } from 'semantic-ui-react';

const ThesaurusAssoc = props => {
  const associations = props.associations;

  let component = <p>List of semantically close lexemes.</p>;
  if (props.isLoading) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (associations && !!associations.length) {
    component = (
      <div>
        {associations.map(assoc => {
          return (
            <div className="keyword-result" key={assoc}>
              {assoc}
            </div>
          );
        })}
        <Divider hidden />
        <div className="tag-powered-by">
          <p>
            Powered by: <a href="https://www.twinword.com/">Twinword</a>
          </p>
        </div>
      </div>
    );
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.dictionary.isLoading,
    associations: state.dictionary.thesaurusAssoc // from ./reducers/dictionaryReducer.js
  };
};

export default connect(mapStateToProps)(ThesaurusAssoc);

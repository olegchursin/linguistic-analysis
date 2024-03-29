import React from 'react';
import { connect } from 'react-redux';

import { Loader } from 'semantic-ui-react';

const TextSummary = props => {
  let component;
  if (props.isLoading) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (props.summary) {
    component = (
      <div>
        <p>{props.summary}</p>
        <div className="tag-powered-by">
          <p>
            Powered by:{' '}
            <a href="https://market.mashape.com/cotomax/summarize-text">
              Cotomax Text Summarizer
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    component = <p>Input the text above to summarize it.</p>;
  }
  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.text.isLoading,
    summary: state.text.summaryText // from ./reducers/textReducer.js
  };
};

export default connect(mapStateToProps)(TextSummary);

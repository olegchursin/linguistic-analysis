import React from 'react';
import { connect } from 'react-redux';

const ThesaurusAnt = props => {
  return (
    <div>
      <p>Antonyms</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    antonyms: state.dictionary.thesaurusAnt
  };
};

export default connect(mapStateToProps)(ThesaurusAnt);

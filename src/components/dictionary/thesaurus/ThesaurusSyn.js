import React from 'react';

import { connect } from 'react-redux';

import { Loader } from 'semantic-ui-react';

const ThesaurusSyn = props => {
  const synonymsArr = [];
  if (!!props.definition.length) {
    const tr = props.definition[0] && props.definition[0].tr;
    const synObjArr = tr.map(el => {
      if (el.syn) {
        return el.syn.map(syn => syn);
      }
    });

    synObjArr.forEach(obj => {
      if (obj) {
        obj.forEach(el => synonymsArr.push(el));
      }
    });
  }

  let component = (
    <p>
      Words that can be interchanged for the original word in the same context.
    </p>
  );

  if (props.isLoading) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (synonymsArr.length) {
    component = (
      <div>
        {synonymsArr.map(syn => {
          return (
            <div className="keyword-result" key={syn.text}>
              {syn.text}
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionYandex
  };
};

export default connect(mapStateToProps)(ThesaurusSyn);

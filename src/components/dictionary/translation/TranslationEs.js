import React from 'react';
import { connect } from 'react-redux';

import { Segment } from 'semantic-ui-react';

const TranslationEs = props => {
  const translation = props.translation;
  let component;
  if (translation.length) {
    component = (
      <div>
        {translation.map((entry, index) => {
          return (
            <Segment key={index}>
              <h3>{entry.text}</h3>
              <p>
                {entry.pos} &#9642; / {entry.ts} /
              </p>
              <ul>
                {entry.tr.map((trEntry, index) => {
                  return (
                    <li key={index}>
                      {trEntry.text} ({trEntry.pos})
                      {trEntry.gen ? (
                        <span> / Gender: {trEntry.gen}</span>
                      ) : (
                        <span></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Segment>
          );
        })}
        <div className="tag-powered-by">
          <p>
            Powered by:{' '}
            <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a>
          </p>
        </div>
      </div>
    );
  } else {
    component = (
      <p>
        English - Spanish translation provided by{' '}
        <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a>.
      </p>
    );
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationEs // from ./reducers/dictionaryReducer.js
  };
};

export default connect(mapStateToProps)(TranslationEs);

// <div>
//   <p>English - Spanish translation.</p>
//   <p>Pronunciation(En): {translation ? translation[0].ts : <span>Loading...</span>}</p>
//   <p>Translation: {translation[0].tr[0].text}</p>
// </div>

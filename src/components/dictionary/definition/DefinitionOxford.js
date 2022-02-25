import React from 'react';
import { connect } from 'react-redux';

import { Loader, Divider } from 'semantic-ui-react';

const DefinitionOxford = props => {
  const definitionArr = props.definition;

  let component;
  if (props.isLoading) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (definitionArr.length !== 0) {
    component = (
      <div>
        {definitionArr.map(def => {
          return (
            <div key={def.lexicalCategory}>
              <Divider hidden />
              <h3>{def.text}</h3>

              <div className="definition-subheader">
                <p>
                  {def.lexicalCategory} &#9642;
                  {def.pronunciations.map(pronunciation => {
                    return (
                      <span key={pronunciation.phoneticSpelling}>
                        /{pronunciation.phoneticSpelling}/
                      </span>
                    );
                  })}
                </p>
              </div>
              <div>
                {def.entries.map(entry => {
                  return (
                    <div key={entry.homographNumber}>
                      <div>
                        <ul>
                          {entry.senses.map(sense => {
                            return (
                              <div key={sense.id}>
                                <div>
                                  {sense.definitions ? (
                                    sense.definitions.map(definition => {
                                      return (
                                        <li key={definition}>{definition}</li>
                                      );
                                    })
                                  ) : (
                                    <li>
                                      uh..oh... We have just discovered an
                                      inconsistency in Oxford Dictionary data :)
                                    </li>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </ul>
                        {entry.etymologies ? (
                          <div>
                            {entry.etymologies.map(etymology => (
                              <p key={etymology}>Etymology: {etymology}</p>
                            ))}
                          </div>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Divider hidden />
        <div className="tag-powered-by">
          <p>
            Powered by:{' '}
            <a href="https://en.oxforddictionaries.com/">Oxford Dictionary</a>
          </p>
        </div>
      </div>
    );
  } else {
    component = (
      <p>
        <a href="https://en.oxforddictionaries.com/">
          The Oxford English Dictionary (OED)
        </a>{' '}
        is the accepted authority on the English language, providing an
        unsurpassed guide to the meaning, history, and pronunciation of more
        than 280,000 entries – past and present – from across the
        English-speaking world.
      </p>
    );
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.dictionary.isLoadingOxford,
    definition: state.dictionary.definitionOxford // from ./reducers/dictionaryReducer.js
  };
};

export default connect(mapStateToProps)(DefinitionOxford);

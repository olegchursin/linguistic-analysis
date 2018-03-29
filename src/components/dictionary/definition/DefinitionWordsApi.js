import React from 'react'
import { connect } from 'react-redux'

// Semantic UI
import { Segment, Divider, Popup, Icon } from 'semantic-ui-react'

const DefinitionWordsApi = (props) => {
  console.log("WordsApi", props.definition)
  const defObj = props.definition

  let component;
  if (defObj.results) {
    component = <div>
      <h3>{defObj.word}</h3>
      <p>/ {defObj.pronunciation.all} / &#9642; Syllables: {defObj.syllables.count} / {defObj.syllables.list.map(syllable => <span key={syllable}>| {syllable} |</span>)}</p>
      {
        defObj.results.map(result => {
          return <Segment key={result.definition}>
            <h4>{result.partOfSpeech}</h4>
            <p>{result.definition}</p>
            {
              result.examples
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Examples
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Examples of how the word is used.'
                    size='mini'
                  />
                </p>
                <div>{result.examples.map(example => <p key={example}>{example}</p>)}
                </div>
              </div>
              :
              <span></span>
            }
            {
              result.synonyms
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Synonyms
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Synonyms of the word.'
                    size='mini'
                  />
                </p>
                <p>
                  {result.synonyms.map(syn => <span key={syn}>{syn}, </span>)}
                </p>
              </div>
              :
              <span></span>
            }
            {
              result.hasCategories
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Categories
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Categories of the defined word.'
                    size='mini'
                  />
                </p>
                <p>
                  {result.hasCategories.map(category => <span key={category}>{category}, </span>)}
                </p>
              </div>
              :
              <span></span>
            }
            {
              result.instanceOf
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Instance Of
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Words that the defined word is an example of.'
                    size='mini'
                  />
                </p>
                <p>{result.instanceOf.map(instance => <span key={instance}>{instance}, </span>)}
              </p>
              </div>
              :
              <span></span>
            }
            {
              result.hasInstances
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Has Instances
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Words that are examples of the defined word.'
                    size='mini'
                  />
                </p>
                <p>{result.hasInstances.map(instance => <span key={instance}>{instance}, </span>)}
              </p>
              </div>
              :
              <span></span>
            }
            {
              result.typeOf
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Type Of
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Words that are more general than the defined word.'
                    size='mini'
                  />
                </p>
                <p>{result.typeOf.map(type => <span key={type}>{type}, </span>)}
              </p>
              </div>
              :
              <span></span>
            }
            {
              result.hasTypes
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Has Types
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='More specific examples of types of the defined word.'
                    size='mini'
                  />
                </p>
                <p>{result.hasTypes.map(type => <span key={type}>{type}, </span>)}
              </p>
              </div>
              :
              <span></span>
            }
            {
              result.partOf
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Part Of
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='The larger whole to which the word belongs.'
                    size='mini'
                  />
                </p>
                <p>{result.partOf.map(part => <span key={part}>{part}, </span>)}
              </p>
              </div>
              :
              <span></span>
            }
            {
              result.hasParts
              ?
              <div>
                <Divider hidden />
                <p className="dictionary-wordsapi-subheader">Has Parts
                  <Popup
                    className="popup-icon"
                    trigger={<Icon name='info circle' />}
                    content='Words that are parts of the defined word.'
                    size='mini'
                  />
                </p>
                <p>{result.hasParts.map(part => <span key={part}>{part}</span>)}
              </p>
              </div>
              :
              <span></span>
            }
          </Segment> // Segment ends
        })
      }
      <div className='tag-powered-by'>
        <p>Powered by: <a href='https://www.wordsapi.com'>WordsAPI</a></p>
      </div>
    </div>
  } else {
    component = <p>Definition provided by <a href='https://www.wordsapi.com'>WordsAPI</a></p>
  }
  return (
    <div>
      { component }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionWordsApi // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionWordsApi);

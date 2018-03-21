import React from 'react'
import { connect } from 'react-redux'

const DefinitionWordsApi = (props) => {
  console.log("WordsApi", props.definition)
  const defObj = props.definition
  return (
    <div>
      <h3>{defObj.word}</h3>
      <p>Pronunciation: [{defObj.pronunciation.all}]</p>
      <p>Syllables: {defObj.syllables.count} | List: {defObj.syllables.list.map(syllable => <span key={syllable}>| {syllable} |</span>)}</p>
      {
        defObj.results.map(result => {
          return <div key={result.definition}>
            <h4>{result.partOfSpeech}</h4>
            <p>{result.definition}</p>
            {result.examples ? <div><h6>Examples</h6><div>{result.examples.map(example => <p key={example}>{example}</p>)}</div></div> : <span></span>}
            {result.synonyms ? <div><h6>Synonyms</h6><div>{result.synonyms.map(syn => <p key={syn}>{syn}</p>)}</div></div> : <span></span>}
            {result.hasCategories ? <div><h6>Categories</h6><div>{result.hasCategories.map(category => <p key={category}>{category}</p>)}</div></div> : <span></span>}
            {result.instanceOf ? <div><h6>Instance Of</h6><div>{result.instanceOf.map(instance => <p key={instance}>{instance}</p>)}</div></div> : <span></span>}
            {result.hasInstances ? <div><h6>Has Instances</h6><div>{result.hasInstances.map(instance => <p key={instance}>{instance}</p>)}</div></div> : <span></span>}
            {result.typeOf ? <div><h6>Type Of</h6><div>{result.typeOf.map(type => <p key={type}>{type}</p>)}</div></div> : <span></span>}
            {result.hasTypes ? <div><h6>Has Types</h6><div>{result.hasTypes.map(type => <p key={type}>{type}</p>)}</div></div> : <span></span>}
            {result.partOf ? <div><h6>Part Of</h6><div>{result.partOf.map(part => <p key={part}>{part}</p>)}</div></div> : <span></span>}
            {result.hasParts ? <div><h6>Has Parts</h6><div>{result.hasParts.map(part => <p key={part}>{part}</p>)}</div></div> : <span></span>}
          </div>
        })
      }
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

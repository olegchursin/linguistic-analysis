import React from 'react'
import { connect } from 'react-redux'

const TranslationEs = (props) => {
  console.log("Translate Es", props.translation)
  const translation = props.translation
  return (
      <div>
        {
          translation.map(entry => {
            return <div key={entry.text}><p>POS: {entry.pos} | Pronunciation: {entry.ts}</p>
                <ul>
                  {
                    entry.tr.map(trEntry => {
                      return <li key={trEntry.text}>{trEntry.text} | Gender: {trEntry.gen} | POS: {trEntry.pos}</li>
                    })
                  }
                </ul>
              </div>
          })
        }
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationEs // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationEs);


// <div>
//   <p>English - Spanish translation.</p>
//   <p>Pronunciation(En): {translation ? translation[0].ts : <span>Loading...</span>}</p>
//   <p>Translation: {translation[0].tr[0].text}</p>
// </div>

import React from 'react'

const YandexDefinition = (props) => {

  return (
    <div>
      <p>
        Yandex Definition
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    definitionYandex: state.dictionary.definitionYandex // from ./reducers/dictionaryReducer.js
  }
}

export default YandexDefinition;

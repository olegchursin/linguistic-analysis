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
    isLoading: state.isLoading,
    definition: state.dictionary.definitionYandex // from ./reducers/dictionaryReducer.js
  }
}

export default YandexDefinition;

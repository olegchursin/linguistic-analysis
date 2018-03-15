import { DEFINING_LEXEME, DEFINED_OXFORD, DEFINED_YANDEX, DEFINED_TWINWORD, DEFINED_WORDSAPI, DEFINED_URBAN } from "../actions/dictionaryActions";

const initialState = {
  definitionOxford: [],
  definitionYandex: [],
  definitionTwinword: [],
  definitionWordsApi: [],
  definitionUrban: [],
  isLoading: false
}

function dictionaryReducer(state = initialState, action) {
  switch (action.type) {
    case DEFINING_LEXEME:
      return { ...state, isLoading: true };
    case DEFINED_OXFORD:
      return { ...state, isLoading: false, definitionOxford: action.payload };
    case DEFINED_YANDEX:
      return { ...state, isLoading: false, definitionYandex: action.payload };
    case DEFINED_TWINWORD:
      return { ...state, isLoading: false, definitionTwinword: action.payload };
    case DEFINED_WORDSAPI:
      return { ...state, isLoading: false, definitionWordsApi: action.payload };
    case DEFINED_URBAN:
      return { ...state, isLoading: false, definitionUrban: action.payload };
    default:
      return state;
  }
}

export { dictionaryReducer }

import { ANALYZING_LEXEME, DEFINED_OXFORD, DEFINED_YANDEX, DEFINED_TWINWORD, DEFINED_WORDSAPI, DEFINED_URBAN, TRANSLATED_ES, TRANSLATED_FR, TRANSLATED_IT, TRANSLATED_RU, TRANSLATED_DE } from "../actions/dictionaryActions";

const initialState = {
  definitionOxford: [],
  definitionYandex: [],
  definitionTwinword: [],
  definitionWordsApi: [],
  definitionUrban: [],
  translationEs: [],
  translationFr: [],
  translationIt: [],
  translationRu: [],
  translationDe: [],
  isLoading: false
}

function dictionaryReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_LEXEME:
      return { ...state, isLoading: true };
    // Defintions
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
    // Trnaslations
    case TRANSLATED_ES:
      return { ...state, isLoading: false, translationEs: action.payload };
    case TRANSLATED_FR:
      return { ...state, isLoading: false, translationFr: action.payload };
    case TRANSLATED_IT:
      return { ...state, isLoading: false, translationIt: action.payload };
    case TRANSLATED_RU:
      return { ...state, isLoading: false, translationRu: action.payload };
    case TRANSLATED_DE:
      return { ...state, isLoading: false, translationDe: action.payload };
    // Default
    default:
      return state;
  }
}

export { dictionaryReducer }

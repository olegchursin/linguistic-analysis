import { ANALYZING_LEXEME, DEFINED_OXFORD, DEFINED_YANDEX, DEFINED_TWINWORD, DEFINED_WORDSAPI, DEFINED_URBAN, TRANSLATED_ES, TRANSLATED_FR, TRANSLATED_IT, TRANSLATED_RU, TRANSLATED_DE, THESAURUS_SYN, THESAURUS_ASSOC, THESAURUS_ANT } from "../actions/dictionaryActions";

const initialState = {
  definitionOxford: [], // Oxford Dictionary
  definitionYandex: [], // Yandex Online Dictionary
  definitionTwinword: [], // TwinwordAPI Definition
  definitionWordsApi: [], // Words API
  definitionUrban: [], // Urban Dictionary
  translationEs: [], // Yandex Online Dictionary
  translationFr: [], // Yandex Online Dictionary
  translationIt: [], // Yandex Online Dictionary
  translationRu: [], // Yandex Online Dictionary
  translationDe: [], // Yandex Online Dictionary
  thesaurusSyn: [], // Oxford Dictionary
  thesaurusAssoc: [], // TwinwordAPI Associations
  thesaurusAnt: [], // Oxford Dictionary
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
    // Thesaurus
    case THESAURUS_SYN:
      return { ...state, isLoading: false, thesaurusSyn: action.payload };
    case THESAURUS_ASSOC:
      return { ...state, isLoading: false, thesaurusAssoc: action.payload };
    case THESAURUS_ANT:
      return { ...state, isLoading: false, thesaurusAnt: action.payload };
    // Default
    default:
      return state;
  }
}

export { dictionaryReducer }

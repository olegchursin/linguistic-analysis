import {
  ANALYZING_LEXEME,
  ANALYZING_LEXEME_OXFORD,
  ANALYZING_LEXEME_SYN,
  DEFINED_YANDEX,
  DEFINED_TWINWORD,
  DEFINED_WORDSAPI,
  DEFINED_URBAN,
  TRANSLATED_ES,
  TRANSLATED_FR,
  TRANSLATED_IT,
  TRANSLATED_RU,
  TRANSLATED_DE,
  THESAURUS_SYN,
  THESAURUS_ASSOC,
  THESAURUS_ANT,
  RHYMES_WITH
} from '../actions/dictionaryActions';

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
  thesaurusAssoc: [], // TwinwordAPI Associations
  thesaurusAnt: [], // WordsAPI
  rhymesWith: [],
  isLoading: false,
  isLoadingOxford: false,
  isLoadingSyn: false
};

function dictionaryReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_LEXEME:
      return { ...state, isLoading: true };
    case ANALYZING_LEXEME_OXFORD:
      return { ...state, isLoadingOxford: true };
    case ANALYZING_LEXEME_SYN:
      return { ...state, isLoadingSyn: true };
    case DEFINED_YANDEX:
      return { ...state, isLoading: false, definitionYandex: action.payload };
    case DEFINED_TWINWORD:
      return { ...state, isLoading: false, definitionTwinword: action.payload };
    case DEFINED_WORDSAPI:
      return { ...state, isLoading: false, definitionWordsApi: action.payload };
    case DEFINED_URBAN:
      return { ...state, isLoading: false, definitionUrban: action.payload };
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
    case THESAURUS_ASSOC:
      return { ...state, isLoading: false, thesaurusAssoc: action.payload };
    case THESAURUS_ANT:
      return { ...state, isLoading: false, thesaurusAnt: action.payload };
    case RHYMES_WITH:
      return { ...state, isLoading: false, rhymesWith: action.payload };
    default:
      return state;
  }
}

export { dictionaryReducer };

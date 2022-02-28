// Dictionary Reducer Actions
import DictionaryApi from '../services/dictionaryApi';

// action to control isLoading state (display loader)
export const ANALYZING_LEXEME = 'ANALYZING_LEXEME';
export const ANALYZING_LEXEME_OXFORD = 'ANALYZING_LEXEME_OXFORD';
export const ANALYZING_LEXEME_SYN = 'ANALYZING_LEXEME_SYN';

// define definition actions
export const DEFINED_YANDEX = 'DEFINED_YANDEX';
export const DEFINED_TWINWORD = 'DEFINED_TWINWORD';
export const DEFINED_WORDSAPI = 'DEFINED_WORDSAPI';
export const DEFINED_URBAN = 'DEFINED_URBAN';

// define Thesaurus Actions
export const THESAURUS_SYN = 'THESAURUS_SYN';
export const THESAURUS_ANT = 'THESAURUS_ANT';
export const THESAURUS_ASSOC = 'THESAURUS_ASSOC';

// define translation Actions
export const TRANSLATED_ES = 'TRANSLATED_ES';
export const TRANSLATED_FR = 'TRANSLATED_FR';
export const TRANSLATED_IT = 'TRANSLATED_IT';
export const TRANSLATED_RU = 'TRANSLATED_RU';
export const TRANSLATED_DE = 'TRANSLATED_DE';

// define rhymes with actions
export const RHYMES_WITH = 'RHYMES_WITH';

// //////////////////////////////// //
// ////// DEFINITION ACTIONS ////// //
// //////////////////////////////// //

export function defineYandex(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineYandex(searchTerm).then(res => {
      dispatch({ type: DEFINED_YANDEX, payload: res.def });
    });
  };
}

export function defineTwinword(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineTwinword(searchTerm).end(res => {
      dispatch({ type: DEFINED_TWINWORD, payload: res.body });
    });
  };
}

export function defineWordsApi(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineWordsApi(searchTerm).then(res => {
      dispatch({ type: DEFINED_WORDSAPI, payload: res });
    });
  };
}

export function defineUrban(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineUrban(searchTerm).end(res => {
      dispatch({ type: DEFINED_URBAN, payload: res.body });
    });
  };
}

// /////////////////////////////// //
// ////// THESAURUS ACTIONS ////// //
// /////////////////////////////// //

// Synonyms
export function thesaurusSyn(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME_SYN });
    DictionaryApi.thesaurusSyn(searchTerm).then(res => {
      dispatch({
        type: THESAURUS_SYN,
        payload: res.results[0].lexicalEntries[0].entries[0].senses[0].synonyms
      });
    });
  };
}

// Associations
export function thesaurusAssoc(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.thesaurusAssoc(searchTerm).end(res => {
      dispatch({ type: THESAURUS_ASSOC, payload: res.body.associations_array });
    });
  };
}

// Antonyms
export function thesaurusAnt(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.thesaurusAnt(searchTerm).then(res => {
      dispatch({ type: DEFINED_WORDSAPI, payload: res });
    });
  };
}

// /////////////////////// //
// ////// PHONETICS ////// //
// /////////////////////// //

// Rhymes with
export function rhymesWith(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.rhymesWith(searchTerm).then(res => {
      dispatch({ type: RHYMES_WITH, payload: res });
    });
  };
}

// ///////////////////////////////// //
// ////// TRANSLATION ACTIONS ////// //
// ///////////////////////////////// //

export function translateEs(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateEs(searchTerm).then(res => {
      dispatch({ type: TRANSLATED_ES, payload: res.def });
    });
  };
}

export function translateFr(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateFr(searchTerm).then(res => {
      dispatch({ type: TRANSLATED_FR, payload: res.def });
    });
  };
}

export function translateIt(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateIt(searchTerm).then(res => {
      dispatch({ type: TRANSLATED_IT, payload: res.def });
    });
  };
}

export function translateRu(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateRu(searchTerm).then(res => {
      dispatch({ type: TRANSLATED_RU, payload: res.def });
    });
  };
}

export function translateDe(searchTerm) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateDe(searchTerm).then(res => {
      dispatch({ type: TRANSLATED_DE, payload: res.def });
    });
  };
}

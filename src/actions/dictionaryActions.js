// Dictionary Reducer Actions
import DictionaryApi from "../services/dictionaryApi";

// action to control isLoading state (display loader)
export const ANALYZING_LEXEME = "ANALYZING_LEXEME";

// define definition actions
export const DEFINED_OXFORD = "DEFINED_OXFORD";
export const DEFINED_YANDEX = "DEFINED_YANDEX";
export const DEFINED_TWINWORD = "DEFINED_TWINWORD";
export const DEFINED_WORDSAPI = "DEFINED_WORDSAPI";
export const DEFINED_URBAN = "DEFINED_URBAN";

// define translation Actions
export const TRANSLATED_ES = "TRANSLATED_ES";
export const TRANSLATED_FR = "TRANSLATED_FR";
export const TRANSLATED_IT = "TRANSLATED_IT";
export const TRANSLATED_RU = "TRANSLATED_RU";
export const TRANSLATED_DE = "TRANSLATED_DE";

// define thesaurus actions


// //////////////////////////////// //
// ////// DEFINITION ACTIONS ////// //
// //////////////////////////////// //

export function defineOxford(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineOxford(searchTerm)
    .then(res => {
      dispatch({ type: DEFINED_OXFORD, payload: res.results[0].lexicalEntries });
    });
  };
}

export function defineYandex(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineYandex(searchTerm)
    .then(res => {
      dispatch({ type: DEFINED_YANDEX, payload: res.def });
    });
  };
}

export function defineTwinword(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineTwinword(searchTerm)
    .end(res => {
      dispatch({ type: DEFINED_TWINWORD, payload: res.body });
    });
  };
}

export function defineWordsApi(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineWordsApi(searchTerm)
    .then(res => {
      dispatch({ type: DEFINED_WORDSAPI, payload: res });
    });
  };
}

export function defineUrban(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.defineUrban(searchTerm)
    .end(res => {
      dispatch({ type: DEFINED_URBAN, payload: res.body });
    });
  };
}

// ///////////////////////////////// //
// ////// TRANSLATION ACTIONS ////// //
// ///////////////////////////////// //

export function translateEs(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateEs(searchTerm)
    .then(res => {
      dispatch({ type: TRANSLATED_ES, payload: res.def });
    });
  };
}

export function translateFr(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateFr(searchTerm)
    .then(res => {
      dispatch({ type: TRANSLATED_FR, payload: res.def });
    });
  };
}

export function translateIt(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateIt(searchTerm)
    .then(res => {
      dispatch({ type: TRANSLATED_IT, payload: res.def });
    });
  };
}

export function translateRu(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateRu(searchTerm)
    .then(res => {
      dispatch({ type: TRANSLATED_RU, payload: res.def });
    });
  };
}

export function translateDe(searchTerm) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_LEXEME });
    DictionaryApi.translateDe(searchTerm)
    .then(res => {
      dispatch({ type: TRANSLATED_DE, payload: res.def });
    });
  };
}

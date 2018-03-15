// Dictionary Reducer Actions
import DictionaryApi from "../services/dictionaryApi";

export const DEFINING_LEXEME = "DEFINING_LEXEME";
export const DEFINED_OXFORD = "DEFINED_OXFORD";
export const DEFINED_YANDEX = "DEFINED_YANDEX";
export const DEFINED_TWINWORD = "DEFINED_TWINWORD";
export const DEFINED_WORDSAPI = "DEFINED_WORDSAPI";
export const DEFINED_URBAN = "DEFINED_URBAN";

// thunk-redux magic
export function defineOxford(searchTerm) {
  return function(dispatch) {
    dispatch({ type: "DEFINING_LEXEME" });
    DictionaryApi.defineOxford(searchTerm)
    .then(res => {
      dispatch({ type: "DEFINED_OXFORD", payload: res.results[0].lexicalEntries });
    });
  };
}

export function defineYandex(searchTerm) {
  return function(dispatch) {
    dispatch({ type: "DEFINING_LEXEME" });
    DictionaryApi.defineYandex(searchTerm)
    .then(res => {
      dispatch({ type: "DEFINED_OXFORD", payload: res.def });
    });
  };
}

export function defineTwinword(searchTerm) {
  return function(dispatch) {
    dispatch({ type: "DEFINING_LEXEME" });
    DictionaryApi.defineTwinword(searchTerm)
    .end(res => {
      dispatch({ type: "DEFINED_TWINWORD", payload: res.body });
    });
  };
}

export function defineWordsApi(searchTerm) {
  return function(dispatch) {
    dispatch({ type: "DEFINING_LEXEME" });
    DictionaryApi.defineWordsApi(searchTerm)
    .then(res => {
      dispatch({ type: "DEFINED_WORDSAPI", payload: res });
    });
  };
}

export function defineUrban(searchTerm) {
  return function(dispatch) {
    dispatch({ type: "DEFINING_LEXEME" });
    DictionaryApi.defineUrban(searchTerm)
    .end(res => {
      dispatch({ type: "DEFINED_URBAN", payload: res.body });
    });
  };
}

// API calls for lexeme definitions, translations, and thesaurus analysis

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');


class DictionaryApi {
  // ///////////////////////// //
  // ////// DEFINITIONS ////// //
  // ///////////////////////// //

  // Oxford Dictionary Definition
  static defineOxford(searchTerm) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/${searchTerm}`, {
      headers: {
        "Accept": "application/json",
        "app_id": 'a30a1a5e',
        "app_key": 'b42a1bcf088e52727e8626ce2716e073'
      }
    })
    .then(res => res.json()) // continues at dictionaryActions.js
  }

  // Yandex Dictionary Definition
  static defineYandex(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-en&text=${searchTerm}`)
    .then(res => res.json())
  }

  // Twinword Definition Definition
  static defineTwinword(searchTerm) {
    return unirest.get(`https://twinword-twinword-bundle-v1.p.mashape.com/word_definition/?entry=${searchTerm}`)
    .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
    .header("Accept", "application/json")
  }

  // WordsAPI Definition
  static defineWordsApi(searchTerm) {
    return fetch(`https://wordsapiv1.p.mashape.com/words/${searchTerm}`, {
      headers: {
        "Accept": "application/json",
        "X-Mashape-Key": 'z69n365FagmshpXYBNcvLgxQ3yd8p16seHGjsnzlL4kvlq9xqf'
      }
    })
    .then(res => res.json())
  }

  // Urban Dictionary Definition
  static defineUrban(searchTerm) {
    return unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${searchTerm}`)
    .header("X-Mashape-Key", "z69n365FagmshpXYBNcvLgxQ3yd8p16seHGjsnzlL4kvlq9xqf")
    .header("Accept", "text/plain")
  }

  // ////////////////////////// //
  // ////// TRANSLATIONS ////// //
  // ////////////////////////// //

  // Spanish Translation
  static translateEs(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-es&text=${searchTerm}`)
    .then(res => res.json())
  }

  // French Translation
  static translateFr(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-fr&text=${searchTerm}`)
    .then(res => res.json())
  }

  // Italian Translation
  static translateIt(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-it&text=${searchTerm}`)
    .then(res => res.json())
  }

  // Russian Translation
  static translateRu(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-ru&text=${searchTerm}`)
    .then(res => res.json())
  }

  // German Translation
  static translateDe(searchTerm) {
    return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-de&text=${searchTerm}`)
    .then(res => res.json())
  }

}

export default DictionaryApi;

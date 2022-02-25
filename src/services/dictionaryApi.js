// API calls for lexeme definitions, translations, and thesaurus analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

import { OXFORD_KEY, YANDEX_KEY, MASHAPE_KEY_R, MASHAPE_KEY_Z } from './appEnv';

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');

class DictionaryApi {
  // ///////////////////////// //
  // ////// DEFINITIONS ////// //
  // ///////////////////////// //

  // Oxford Dictionary Definition
  static defineOxford(searchTerm) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/${searchTerm}`,
      {
        headers: {
          Accept: 'application/json',
          app_id: 'a30a1a5e',
          app_key: OXFORD_KEY
        }
      }
    ).then(res => res.json()); // continues at dictionaryActions.js
  }

  // Yandex Dictionary Definition
  static defineYandex(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-en&text=${searchTerm}`
    ).then(res => res.json());
  }

  // Twinword Definition Definition
  static defineTwinword(searchTerm) {
    return unirest
      .get(
        `https://twinword-twinword-bundle-v1.p.mashape.com/word_definition/?entry=${searchTerm}`
      )
      .header('X-Mashape-Key', MASHAPE_KEY_R)
      .header('Accept', 'application/json');
  }

  // WordsAPI Definition
  static defineWordsApi(searchTerm) {
    return fetch(`https://wordsapiv1.p.mashape.com/words/${searchTerm}`, {
      headers: {
        Accept: 'application/json',
        'X-Mashape-Key': MASHAPE_KEY_Z
      }
    }).then(res => res.json());
  }

  // Urban Dictionary Definition
  static defineUrban(searchTerm) {
    return unirest
      .get(
        `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${searchTerm}`
      )
      .header('X-Mashape-Key', MASHAPE_KEY_Z)
      .header('Accept', 'text/plain');
  }

  // ////////////////////// //
  // ////// THESARUS ////// //
  // ////////////////////// //

  // Synonyms
  // Syn Oxford
  static thesaurusSyn(searchTerm) {
    // oxforddictionaries
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${searchTerm}/synonyms`,
      {
        headers: {
          Accept: 'application/json',
          app_id: 'a30a1a5e',
          app_key: OXFORD_KEY
        }
      }
    ).then(res => res.json()); // continues at dictionaryActions.js
  }

  // Associations
  static thesaurusAssoc(searchTerm) {
    return unirest
      .post(
        'https://twinword-twinword-bundle-v1.p.mashape.com/word_associations/'
      )
      .header('X-Mashape-Key', MASHAPE_KEY_R)
      .header('Content-Type', 'application/x-www-form-urlencoded')
      .header('Accept', 'application/json')
      .send(`entry=${searchTerm}`);
  }

  // Antonyms
  static thesaurusAnt(searchTerm) {
    return fetch(
      `https://wordsapiv1.p.mashape.com/words/${searchTerm}/antonyms`,
      {
        headers: {
          Accept: 'application/json',
          'X-Mashape-Key': MASHAPE_KEY_Z
        }
      }
    ).then(res => res.json());
  }

  // /////////////////////// //
  // ////// PHONETICS ////// //
  // /////////////////////// //

  // Rhymes with
  static rhymesWith(searchTerm) {
    return fetch(
      `https://wordsapiv1.p.mashape.com/words/${searchTerm}/rhymes`,
      {
        headers: {
          Accept: 'application/json',
          'X-Mashape-Key': MASHAPE_KEY_Z
        }
      }
    ).then(res => res.json());
  }

  // ////////////////////////// //
  // ////// TRANSLATIONS ////// //
  // ////////////////////////// //

  // Spanish Translation
  static translateEs(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-es&text=${searchTerm}`
    ).then(res => res.json());
  }

  // French Translation
  static translateFr(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-fr&text=${searchTerm}`
    ).then(res => res.json());
  }

  // Italian Translation
  static translateIt(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-it&text=${searchTerm}`
    ).then(res => res.json());
  }

  // Russian Translation
  static translateRu(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-ru&text=${searchTerm}`
    ).then(res => res.json());
  }

  // German Translation
  static translateDe(searchTerm) {
    return fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_KEY}&lang=en-de&text=${searchTerm}`
    ).then(res => res.json());
  }
}

export default DictionaryApi;

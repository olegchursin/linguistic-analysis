// API calls for lexeme definitions, translations, and thesaurus analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

import {
  YANDEX_KEY,
  MASHAPE_KEY_R,
  MASHAPE_KEY_Z,
  X_RAPID_API_KEY
} from './appEnv';
import axios from 'axios';

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');

class DictionaryApi {
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

  // Associations
  static async thesaurusAssoc(searchTerm) {
    var options = {
      method: 'GET',
      url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
      params: { entry: searchTerm },
      headers: {
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com',
        'x-rapidapi-key': X_RAPID_API_KEY
      }
    };

    return axios
      .request(options)
      .then(response => response)
      .catch(error => {
        console.error(error);
      });
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

// API calls for hashtag analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

import { WORDASSOCIATIONS_KEY, MASHAPE_KEY_1 } from './appEnv'


// MashapeAPI tool for API requests
// http://unirest.io/nodejs
// const unirest = require('unirest');

class SemanticsApi {
  // //////////////////////////////// //
  // ////// ASSOCIATIVE LIST ////// //
  // //////////////////////////////// //

  static associativeList(searchTerm) {
    return fetch(`https://wordassociations-word-associations-v1.p.mashape.com/json/search?apikey=${WORDASSOCIATIONS_KEY}&indent=yes&lang=en&limit=100&pos=noun%2Cadjective%2Cverb%2Cadverb&text=${searchTerm}&type=stimulus`, {
      headers: {
        "X-Mashape-Key": MASHAPE_KEY_1,
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

}

export default SemanticsApi;

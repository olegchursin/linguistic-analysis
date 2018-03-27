// API calls for hashtag analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

import { WORDASSOCIATIONS_KEY, MASHAPE_KEY_R } from './appEnv'

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
// const unirest = require('unirest');

class HashtagApi {
  // //////////////////////////////// //
  // ////// HASHTAG DEFINITION ////// //
  // //////////////////////////////// //

  // Hashtag definition from tagdef.com
  static hashtagDefinition(inputText) {
    return fetch(`https://cors-anywhere.herokuapp.com/http://api.tagdef.com/${inputText}.json`)
    .then(res => res.json())
     // continues at hashtagActions.js
  }

  static hashtagSuggestion(suggestInput) {
    return fetch(`https://wordassociations-word-associations-v1.p.mashape.com/json/search?apikey=${WORDASSOCIATIONS_KEY}&indent=yes&lang=en&limit=50&pos=noun%2Cadjective%2Cverb%2Cadverb&text=${suggestInput}&type=stimulus`, {
      headers: {
        "X-Mashape-Key": MASHAPE_KEY_R,
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

}

export default HashtagApi;

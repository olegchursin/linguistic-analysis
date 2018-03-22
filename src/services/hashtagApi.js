// API calls for hashtag analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

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
    return fetch(`https://wordassociations-word-associations-v1.p.mashape.com/json/search?apikey=3e4b3752-b432-4b52-b85a-3017084b1acd&indent=yes&lang=en&limit=50&pos=noun%2Cadjective%2Cverb%2Cadverb&text=${suggestInput}&type=stimulus`, {
      headers: {
        "X-Mashape-Key": "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r",
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

  // // Getting undefined body - use fetch instead of unirest and should work just fine
  // static hashtagSuggestion(inputText) {
  //   return unirest.post("https://dmitrykey-connectedwords-v1.p.mashape.com/similarwords")
  //   .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
  //   .header("Content-Type", "application/json")
  //   .header("Accept", "application/json")
  //   .send([`${suggestInput}`])
  // }

}

export default HashtagApi;
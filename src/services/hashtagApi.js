// API calls for hashtag analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');

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

  static hashtagSimilar(inputText) {
    return unirest.post("https://dmitrykey-connectedwords-v1.p.mashape.com/similarwords")
    .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
    .header("Content-Type", "application/json")
    .header("Accept", "application/json")
    .send([`${inputText}`])
  }

}

export default HashtagApi;

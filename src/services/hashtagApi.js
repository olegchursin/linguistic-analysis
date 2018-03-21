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

}

export default HashtagApi;

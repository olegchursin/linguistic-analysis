// API calls for hashtag analysis
// // CORS Anywheere patch: add this URL (https://cors-anywhere.herokuapp.com/) in front of your call URL

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
// const unirest = require('unirest');

class SemanticsApi {
  // //////////////////////////////// //
  // ////// ASSOCIATIVE LIST ////// //
  // //////////////////////////////// //

  static associativeList(searchTerm) {
    return fetch(`https://wordassociations-word-associations-v1.p.mashape.com/json/search?apikey=3e4b3752-b432-4b52-b85a-3017084b1acd&indent=yes&lang=en&limit=100&pos=noun%2Cadjective%2Cverb%2Cadverb&text=${searchTerm}&type=stimulus`, {
      headers: {
        "X-Mashape-Key": "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r",
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

}

export default SemanticsApi;

// API calls for text analytics

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');

class TextApi {
  // ////////////////////// //
  // ////// KEYWORDS ////// //
  // ////////////////////// //

  // Keyword Extraction from Text Analysis API
  static keywordsTextAnalysis(inputText) {
    return unirest.post("https://textanalysis-keyword-extraction-v1.p.mashape.com/keyword-extractor-text")
    .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send(`text=${inputText}`)
    .send("wordnum=10")
     // continues at textActions.js
  }

}

export default TextApi;

// API calls for text analytics


import { MASHAPE_KEY_R } from './appEnv'

// MashapeAPI tool for API requests
// http://unirest.io/nodejs
const unirest = require('unirest');

class TextApi {
  // ////////////////////// //
  // ////// KEYWORDS ////// //
  // ////////////////////// //

  // Keyword Extraction from Text Analysis API
  static keywordsTextAnalysis(inputText) {
    return unirest
    .post("https://textanalysis-keyword-extraction-v1.p.mashape.com/keyword-extractor-text")
    .header("X-Mashape-Key", MASHAPE_KEY_R)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send(`text=${inputText}`)
    .send("wordnum=10")
     // continues at textActions.js
  }


  // /////////////////////// //
  // ////// SENTIMENT ////// //
  // /////////////////////// //

  // Sentiment Datumbox
  static sentimentDatumbox(inputText) {
    return unirest
    .post("https://community-datumbox.p.mashape.com/1.0/SentimentAnalysis.json?api_key=263dcd0c0da01a74d3d94d848989f549")
    .header("X-Mashape-Key", MASHAPE_KEY_R)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "text/plain")
    .send(`text=${inputText}`)
     // continues at textActions.js
  }

  // Sentiment Twinword
  static sentimentTwinword(inputText) {
    return unirest
    .post("https://twinword-sentiment-analysis.p.mashape.com/analyze/")
    .header("X-Mashape-Key", MASHAPE_KEY_R)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send(`text=${inputText}`)

  }

  // ///////////////////// //
  // ////// SUMMARY ////// //
  // ///////////////////// //
  static summaryText(inputText) {
    return unirest
    .post("https://cotomax-summarizer-text-v1.p.mashape.com/summarizer")
    .header("X-Mashape-Key", MASHAPE_KEY_R)
    .header("Content-Type", "application/json")
    .header("Accept", "application/json")
    .send({
      "Percent": "30",
      "Language": "en",
      "Text": `${inputText}`
    })

  }
}

export default TextApi;

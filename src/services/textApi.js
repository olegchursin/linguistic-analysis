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


  // /////////////////////// //
  // ////// SENTIMENT ////// //
  // /////////////////////// //

  // Sentiment Google
  static sentimentGoogle(inputText) {

    // GOOGLE -- Imports the Google Cloud client library
    const language = require('@google-cloud/language');
    // GOOGLE -- Create a client that uses Application Default Credentials (ADC):
    const client = new language.LanguageServiceClient();

    // GOOGLE -- Create a client with explicit credentials:
    // const client = new language.LanguageServiceClient({
    //   projectId: 'linguistic-analysis',
    //   keyFilename: '../keys/LinguisticAnalysis-a120d48cddca.json',
    // });
    // GOOGLE -- Your text
    // const text = `${inputText}`;
    const text = inputText;
    // Prepares a document, representing the provided text
    const doc = {
      content: text,
      type: 'PLAIN_TEXT',
    };
    // GOOGLE -- Detects the sentiment of the document
    return client
      .analyzeSentiment({document: doc})

    // // Google Key
    // const GOOGLE_API_KEY = 'AIzaSyAHJU-vJjjiY2OLgKBPJLX8cp-K_Mbn3XQ'
    // return fetch(`https://language.googleapis.com/v1/documents:analyzeEntities?key=${GOOGLE_API_KEY}`, {
    //   headers: {
    //
    //   }
    // })
  }

  // Sentiment Datumbox
  static sentimentDatumbox(inputText) {
    return unirest.post("https://community-datumbox.p.mashape.com/1.0/SentimentAnalysis.json?api_key=263dcd0c0da01a74d3d94d848989f549")
    .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "text/plain")
    .send(`text=${inputText}`)
     // continues at textActions.js
  }

  // Sentiment Twinword
  static sentimentTwinword(inputText) {
    return unirest.post("https://twinword-sentiment-analysis.p.mashape.com/analyze/")
    .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send(`text=${inputText}`)

  }

}

export default TextApi;

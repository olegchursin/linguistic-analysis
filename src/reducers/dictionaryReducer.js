const initialState = {
  definitionOxford: [],
  definitionWordsApi: [],
  definitionTwinword: [],
  definitionYandex: [],
  definitionUrban: []
}

const dictionaryReducer = (state = initialState, action) => {
  switch(action.type){

    default:
      return state
  }
}

export { dictionaryReducer }

//
// case "DEFINE_LEXEME":
//   return (
//     // Oxford Dictionary
//     fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/${this.state.searchTerm}`, {
//       headers: {
//         "Accept": "application/json",
//         "app_id": 'a30a1a5e',
//         "app_key": 'b42a1bcf088e52727e8626ce2716e073'
//       }
//     })
//     .then(res => res.json())
//     .then(res => {
//       this.setState({
//         definitionOxford: res.results[0].lexicalEntries
//       }, () => console.log("Oxford", this.state.definitionOxford))
//     })
//
//     // Yandex Dictionary
//     fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180228T050713Z.08ca0db1e582b3ef.c976dc7eb73db39d6073352aaf801e81e3e55323&lang=en-en&text=${this.state.searchTerm}`)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({
//         definitionYandex: res.def
//       }, () => console.log("Yandex", this.state.definitionYandex))
//     })
//
//     // Twinword Definition
//     unirest.get(`https://twinword-twinword-bundle-v1.p.mashape.com/word_definition/?entry=${this.state.searchTerm}`)
//     .header("X-Mashape-Key", "ru9cyyTR8dmshYGRTnxRfRi9JPy3p1JnutrjsnjWTE2KVBx86r")
//     .header("Accept", "application/json")
//     .end(res => {
//       this.setState({
//         definitionTwinword: res.body
//       }, () => console.log("Twinword", this.state.definitionTwinword))
//     });
//
//     // WordsAPI
//     fetch(`https://wordsapiv1.p.mashape.com/words/${this.state.searchTerm}`, {
//       headers: {
//         "Accept": "application/json",
//         "X-Mashape-Key": 'z69n365FagmshpXYBNcvLgxQ3yd8p16seHGjsnzlL4kvlq9xqf'
//       }
//     })
//     .then(res => res.json())
//     .then(res => console.log("Words", res))
//
//     // Urban Dictionary
//     unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${this.state.searchTerm}`)
//     .header("X-Mashape-Key", "z69n365FagmshpXYBNcvLgxQ3yd8p16seHGjsnzlL4kvlq9xqf")
//     .header("Accept", "text/plain")
//     .end(res => {
//       this.setState({
//         definitionUrban: res.body
//       }, () => console.log("Urban", this.state.definitionUrban))
//     });
//   )

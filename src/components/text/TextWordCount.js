import React from 'react'

const TextWordCount = (props) => {
  const text = props.text

  // Count vowels
  const vowel_count = (string) => {
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for(let x = 0; x < string.length ; x++)
    {
      if (vowel_list.indexOf(string[x]) !== -1)
      {
        vcount += 1;
      }

    }
    return vcount;
  }

  // Consonants count
  const cons_count = (string) => {
    let cons_list = 'bcdfghjklmnpqrstvwxBCDFGHJKLMNPQRSTVWX';
    let ccount = 0;

    for(let x = 0; x < string.length ; x++)
    {
      if (cons_list.indexOf(string[x]) !== -1)
      {
        ccount += 1;
      }

    }
    return ccount;
  }

  return (
    <div>
      <h4>Symbols: {text.length}</h4>
      <h4>Words: {text.length !== 0 ? text.split(/\s+\b/).length : 0}</h4>
      <h4>Vowels: {vowel_count(text)}</h4>
      <h4>Consonants: {cons_count(text)}</h4>
    </div>
  )
}


export default TextWordCount

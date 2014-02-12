function words(input) {
  "use strict";
  function getWords(input) {
    function removePunctuation(string) {
      return string.replace(/\W+/ig," ").replace(/\s$|^\s/g,"");
    }
    function splitStringBySpaces(string) {
      return string.split(/\s+/g);
    }
    function countWords(wordsArray) {
      var wordCounts, i, currentWord;
      wordCounts = {};
      for(i = 0; i<wordsArray.length; i++){
        currentWord = wordsArray[i].toLowerCase();
        if(wordCounts[currentWord]) {
          wordCounts[currentWord]++;
        } else {
          wordCounts[currentWord] = 1;
        }
      }
      return wordCounts;
    }
    var words, wordCounts;
    words = removePunctuation(input);
    words = splitStringBySpaces(words);
    wordCounts = countWords(words);
    return wordCounts;
  }
  return getWords(input);
}
module.exports = words;
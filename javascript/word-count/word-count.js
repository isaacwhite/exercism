function words(input) {
  "use strict";
  function Counter() {
    var counts = {};
    return {
      add: function(word) {
        var lowerCase = word.toLowerCase();
        if(counts[lowerCase]) {
          counts[lowerCase]++;
        } else {
          counts[lowerCase] = 1;
        }
      },
      getCounts: function() {
        return counts;
      }
    };
  }
  function removePunctuation(string) {
    return string.replace(/\W+/g," ").replace(/\s$|^\s/g,"");
  }
  function splitStringBySpaces(string) {
    return string.split(/\s+/g);
  }
  function countWords(wordsArray) {
    var counter, i;
    counter = new Counter();
    for(i = 0; i < wordsArray.length; i++){
      counter.add(wordsArray[i]);
    }
    return counter.getCounts();
  }
  input = removePunctuation(input);
  input = splitStringBySpaces(input);
  return countWords(input);
}
module.exports = words;
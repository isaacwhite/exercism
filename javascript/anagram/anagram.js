function Anagram(text) {
  "use strict";
  this.text = text;
}
Anagram.prototype.match = function (arrayOfWords) {
  "use strict";
  function getCharCount() {
    var charArray, charMap, currChar, i;
    charArray = that.text.toLowerCase().split("");
    charMap = {};
    for(i = 0; i < charArray.length; i++) {
      currChar = charArray[i];
      if(charMap[currChar]) {
        charMap[currChar]++;
      } else {
        charMap[currChar] = 1;
      }
    }
    return charMap;
  }
  function checkAnagram(comparisonWord) {
    var splitCompWord, charCounts, i, currentChar;
    charCounts = getCharCount();
    splitCompWord = comparisonWord.toLowerCase().split("");
    for(i = 0; i < splitCompWord.length; i++) {
      currentChar = splitCompWord[i];
      if(charCounts[currentChar] && (charCounts[currentChar] > 0)) {
        charCounts[currentChar]--;
      } else {
        return false;
      }
    }
    return comparisonWord;
  }
  var i, wordLength, checkLength, compWord, that, result, anagrams;
  that = this;
  anagrams = [];
  wordLength = this.text.length;
  checkLength = arrayOfWords.length;
  for (i = 0; i < checkLength; i++) {
    compWord = arrayOfWords[i];
    if((compWord.toLowerCase() !== this.text.toLowerCase()) &&
      (compWord.length === wordLength)) {
      result = checkAnagram(compWord);
      if(result) {
        anagrams.push(compWord);
      }
    } //no else
  }
  return anagrams;
};
module.exports = Anagram;
var Bob = function() {
"use strict";
};

Bob.prototype.hey = function (input) {
  function testInput(string) {
    function testEmpty(string) {
      if((string.length === 0) ||
         (string.replace(/ /g,"").length === 0)) {
        return true;
      } else {
        return false;
      }
    }
    function testNumbers(string) {
      if((string === string.toUpperCase()) &&
         (string === string.toLowerCase()) &&
         (!testEmpty(string))) {
        return true;
      } else {
        return false;
      }
    }
    function testShout(string) {
      if((string === string.toUpperCase()) &&
         (string !== string.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
    function testQuestion(string) {
      if((!testEmpty(string)) &&
         (string.substr(string.length - 1) === "?")) {
        return true;
      } else {
        return false;
      }
    }
    return {
      numbers: testNumbers(string),
      empty: testEmpty(string),
      shout: testShout(string),
      question: testQuestion(string)
    };
  }
  var testResult = testInput(input);

  if(testResult.empty) {
    return "Fine. Be that way!";
  } else if(testResult.shout) {
    return "Woah, chill out!";
  } else if(testResult.question) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};
module.exports = Bob;
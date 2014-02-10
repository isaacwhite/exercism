var Bob = function() {
"use strict";
};

Bob.prototype.hey = function (input) {
  function testInput(string) {
    function testEmpty(string) {
      return ((string.length === 0) ||
         (string.replace(/ /g,"").length === 0));
    }
    function testNumbers(string) {
      return ((string === string.toUpperCase()) &&
         (string === string.toLowerCase()) &&
         (!testEmpty(string)));
    }
    function testShout(string) {
      return ((string === string.toUpperCase()) &&
         (string !== string.toLowerCase()));
    }
    function testQuestion(string) {
      return ((!testEmpty(string)) &&
         (string.substr(string.length - 1) === "?"));
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
var Bob = function () {
};
Bob.prototype.hey = function (input) {
  "use strict";
  function testInput(string) {
    function testEmpty(string) {
      return string.trim() === "";
    }
    function testShout(string) {
      return (string === string.toUpperCase()) &&
         (string !== string.toLowerCase());
    }
    function testQuestion(string) {
      return (!testEmpty(string)) &&
         (string.slice(-1) === "?");
    }
    return {
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
var Bob = function () {}; //empty constructor
Bob.prototype.hey = function (input) {
  "use strict";
  var test = {
    empty:    input.trim() === "",
    shout:    input === input.toUpperCase() &&
              input !== input.toLowerCase(),
    question: input.slice(-1) === "?"
  };
  if(test.empty) return "Fine. Be that way!";
  if(test.shout) return "Woah, chill out!";
  if(test.question) return "Sure."; else return "Whatever.";
};
module.exports = Bob;
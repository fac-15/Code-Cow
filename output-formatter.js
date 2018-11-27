// const fs = require("fs");
// const test = require("./test.js");

var myString = "";

var obj = process.stdin.setEncoding("utf8");

obj.on("data", function(chunk) {
  myString += chunk;
});

obj.on("error", function(err) {
  console.log(err);
});

obj.on("end", function() {
  let newArr = myString.split("\n");
  // console.log(newArr);
  var counterFail = 0;
  var counterPass = 0;
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i].includes("not ok")) {
      counterFail++;
    } else {
      counterPass++;
    }
  }
  if (counterFail > 0) {
    console.log(
      `
      ${counterFail} tests failed!
      ${counterPass} tests passed!

 CODE COW SAYS:

 "SOME OF YOUR TESTS FAILED... I AM NOT AMOOOOOOSED"


        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
    );
  } else {
    console.log(
      `
      ${counterFail} tests failed!
      ${counterPass} tests passed!

 CODE COW SAYS:

 "YOUR CODE IS  L E G E N D A I R Y"


        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
    );
  }
});

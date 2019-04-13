const express = require("express");
const request = require("request");
const fs = require("fs");
const port = "8080";
const app = express();

var url = "http://google.com";

// request(url, function(err, resp, body) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// });

var destination = fs.createWriteStream("./downloads/google2.html");
request(url)
  .pipe(destination)
  .on("finish", function() {
    console.log("all done");
  })
  .on("error", function(err) {
    console.log(err);
  });

app.listen(port, function() {
  console.log("app is listening to port " + port);
});

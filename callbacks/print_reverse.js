var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function lowerHTML (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, lowerHTML);
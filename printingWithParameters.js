var https = require('https');

function getAndPrintHTML (options) {

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var a = "";

    response.on('data', function(data) {
      a += data;
    });

    response.on('end', function() {
      console.log(a);
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
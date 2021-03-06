var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    var outputData = "";

    response.on('data', function(data) {
      outputData += data;
    });

    response.on('end', function() {
      console.log(outputData);
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
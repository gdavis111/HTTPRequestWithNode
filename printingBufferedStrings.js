var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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
}

getAndPrintHTML();

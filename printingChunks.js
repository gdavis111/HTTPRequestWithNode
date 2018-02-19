var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('Chunk Received. Data: ' + data + "\n");
    });

  response.on('end', function() {
    console.log('Response stream complete.');
    });
  });

}

getAndPrintHTMLChunks();

// Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
// You can use the example above as a reference or template.
// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
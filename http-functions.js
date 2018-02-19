var https = require('https');

module.exports = function getHTML (options, callback) {

    https.get(options, function(response) {
    response.setEncoding('utf8');

    var outputData = "";

    response.on('data', function(data) {
      outputData += data;
    });

    response.on('end', function() {
      callback(outputData);
    });
  });
};
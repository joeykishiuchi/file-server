const fs = require('fs');

const retrieveFile = function(fileSource, callback) {
  fs.readFile(`./stored-files/${fileSource}`, 'utf8', (err, body) => {
    if (err) throw err;
    callback(body);
  });
};

module.exports = retrieveFile;
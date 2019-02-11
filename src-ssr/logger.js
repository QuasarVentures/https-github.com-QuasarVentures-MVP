const fs = require('fs')
const https = require('https');

const key = process.env.GEOAPIKEY || 'at_KJMKhpG38S06vO9MJiGl2iFsD8uDv';
const url = 'https://geoipify.whoisxmlapi.com/api/v1';

function writeLog(data) {
  var log_file = fs.createWriteStream(__dirname + '/access.log', {flags : 'a'});
  log_file.write(JSON.stringify(data) + '\n');
}

module.exports = function (req, res, next) {
  let data = {};
  data.time = new Date().getTime();
  data.url = req.url;
  data.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  data.geo = {};
  data.headers = req.headers;
  if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(data.ip) && data.ip !== '127.0.0.1') {
    https.get(url + '?apiKey=' + key + '&ipAddress=' + data.ip, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        res.resume();
        writeLog(data);
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          data.geo = JSON.parse(rawData);
          writeLog(data);
        } catch (e) {
          writeLog(data);
        }
      });
    });
  } else {
    writeLog(data);
  }
  next();
}

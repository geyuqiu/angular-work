const fs = require('fs');
const path = require('path');
const http = require('http');
const formidable = require('formidable');

const staticBasePath = './mock';
const port = 8888;

const mockServer = http.createServer((request, response) => {
  try {

    if (request.url.indexOf('spn') > 0) {
      const spnJson = fs.readFileSync(path.join(path.resolve(staticBasePath), "api/spn.json"), 'utf8');

      setTimeout(() => {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(JSON.parse(spnJson).sort(() => Math.random() > 0.5 ? -1 : 1).slice(0, 20)));
      }, Math.floor(Math.random() * 100));
    }

    if (request.url.indexOf('action') > 0 || request.url.indexOf('confirmationMail') > 0) {
      var form = new formidable.IncomingForm();
      form.parse(request, function (err, fields, files) {
        console.log(fields);
        console.log(files);
      });
      setTimeout(() => {
        response.setHeader('Content-Type', 'plain/text');
        response.end('OK');
      }, Math.floor(Math.random() * 100));
    }


  } catch (e) {
    oops(response, e);

  }
});
mockServer.listen(port);
console.log(`MockServer startet on port ${port}`);

function oops(response, e) {
  response.writeHead(500, 'Oooops');
  response.write('These are not the resources you\'re looking for ...');
  response.end();
  console.log(e);
}

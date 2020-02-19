const path = require('path');
const express = require('express');
// const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = 51623;
app.use(express.static(path.join(__dirname, '/../client/dist/')));
// app.use(
//   '/',
//   expressStaticGzip(path.join(__dirname, '/../client/dist/'), {
//     enableBrotli: true
//   })
// );
// app.use(
//   '/',
//   expressStaticGzip(path.join(__dirname, '/../client/dist/'), {
//     enableBrotli: true,
//     orderPreference: ['br', 'gz'],
//     setHeaders: function(res, path) {
//       res.setHeader('Cache-Control', 'public, max-age=31536000');
//     }
//   })
// );
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client/dist/')
  });
});
app.listen(port, () => console.log(`Listening on port ${port}!`));

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client/dist/')
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

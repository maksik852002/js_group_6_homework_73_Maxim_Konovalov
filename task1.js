const express = require('express');

const app = express();
const port = 8000;

app.get('/' , (req, res) => {
  res.send('Enter "http://localhost:8000/sometext" to address bar');
});

app.get('/:value' , (req, res) => {
  res.send(req.params.value);
});

app.listen(port, () => {
  console.log('Start at localhost: ' + port);
}); 
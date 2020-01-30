const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'Hardpass'

app.get('/' , (req, res) => {
  res.send('Enter "http://localhost:8000/encode/sometext" to address bar to encode \n or "http://localhost:8000/decode/encodedtext" to decode!');
});

app.get('/encode/:value' , (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(req.params.value));
});

app.get('/decode/:value' , (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.value));
});

app.listen(port, () => {
  console.log('Start at localhost: ' + port);
});
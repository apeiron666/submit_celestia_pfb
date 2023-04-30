const { exec } = require('child_process');
const express = require('express');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port ${port}' + port);
})

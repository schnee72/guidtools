import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import chalk from 'chalk';

/* eslint-disable no-console */

const port = 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});

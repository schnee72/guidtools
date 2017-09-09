import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';

/* eslint-disable no-console */

console.log(chalk.green('Starting in DEV mode...'));

const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-hot-middleware")(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});

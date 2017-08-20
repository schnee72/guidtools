import { h, Component } from 'preact';
import Generate from './Generate';
import Validate from './Validate';

/* eslint-disable no-console */

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>guid tools</h1>
        <Generate />
        <Validate />
      </div>
    );
  }
}

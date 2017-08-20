import { h, Component } from 'preact';
import { clipy } from './utils.js';

/* eslint-disable no-console */

const COPY = 'copy';
const COPIED = 'copied!';

export default class Guid extends Component {
  constructor() {
    super();
    this.state = { copyClass: "labelHidden", buttonText: COPY };
  }

  componentWillReceiveProps() {
    this.clearCopy();
  }

  copy = () => {
    clipy(this.props.guid);
    this.setState({ buttonText: COPIED });
    setTimeout(() => this.clearCopy(), 2500);
  };

  clearCopy = () => {
    this.setState({ buttonText: COPY });
  };

  render() {
    return (
      <div>
        <span class="guid">{this.props.guid}</span>
        <button class="left hundred" onClick={this.copy}>{this.state.buttonText}</button>
      </div>
    );
  }
}

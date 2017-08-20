import {h, Component} from 'preact';
import './Guid.css';
import {clipy} from './utils.js';

/* eslint-disable no-console */

export default class Guid extends Component {
  constructor() {
    super();
    this.state = {copyClass: "labelHidden"};
  }

  componentWillReceiveProps() {
    this.clearCopy();
  }

  copy = () => {
    clipy(this.props.guid);
    this.setState({copyClass: "label"});
    setTimeout(() => this.clearCopy(), 1500);
  };

  clearCopy = () => {
    if (this.state.copyClass !== 'labelHidden')
      this.setState({copyClass: "labelHidden"});
  };

  render() {
    return (
      <div>
        <span class="guid">{this.props.guid}</span>
        <button onClick={this.copy}>copy</button>
        <label class={this.state.copyClass} onclick={this.clearCopy}>copied to clipboard!</label>
      </div>
    );
  }
}

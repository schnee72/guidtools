import { h, Component } from 'preact';
import { clipy } from './utils.js';

const COPY = 'copy';
const COPIED = 'copied!';

export default class Guid extends Component {
  constructor() {
    super();
    this.state = {
      copyClass: "labelHidden",
      buttonText: COPY,
      guidClass: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.guid !== this.props.guid)
      this.setState({ guidClass: '' });
    this.clearCopy();
  }

  copy = () => {
    clipy(this.props.guid);
    this.setState({ buttonText: COPIED, guidClass: 'red' });
    setTimeout(() => this.clearCopy(), 2500);
  };

  clearCopy = () => {
    this.setState({ buttonText: COPY });
  };

  render() {
    return (
      <tr>
        <td class="threefifty">
          <span class={this.state.guidClass}>{this.props.guid}</span>
        </td>
        <td>
          <button
            class="seventyfive"
            onClick={this.copy}>{this.state.buttonText}</button>
        </td>
      </tr>
    );
  }
}

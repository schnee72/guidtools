import { h, Component } from 'preact';
import Guid from './Guid';
import { clipy, generateGuids } from './utils';

/* eslint-disable no-console */

const COPYALL = 'copy-all';
const COPIED = 'copied!';

export default class Generate extends Component {
  constructor() {
    super();
    this.state = { guids: [], guidComponents: [], copyButtonText: COPYALL, guidsClass: '' };
  }

  componentDidMount() {
    this.buildGuids();
  }

  buildGuids = () => {
    this.clearCopyAll();
    this.setState({ guids: generateGuids() });
    let guids = [];
    for (let guid of this.state.guids)
      guids.push(<Guid guid={guid} />);
    this.setState({ guidComponents: guids, guidsClass: '' });
  };

  copyAll = () => {
    this.setState({ guids: this.state.guidComponents.map((g) => { return g.attributes.guid; }), copyButtonText: COPIED, guidsClass: 'red' });
    clipy(this.state.guids.join('\n'));
    setTimeout(() => this.clearCopyAll(), 2500);
  };

  clearCopyAll = () => {
    this.setState({ copyButtonText: COPYALL });
  }

  render() {
    return (
      <div>
        <h2>generate</h2>
        <div class="bottom">
          <input type="checkbox" id="single" /><label for="single">single</label>
          <input type="checkbox" id="double" /><label for="double">double</label>
          <button class="hundred" onClick={this.buildGuids}>refresh</button>
          <button class="hundred" onClick={this.copyAll}>{this.state.copyButtonText}</button>
        </div>
        <div class={this.state.guidsClass}>
          {this.state.guidComponents}
        </div>
      </div>
    );
  }
}

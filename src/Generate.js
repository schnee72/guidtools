import { h, Component } from 'preact';
import Guid from './Guid';
import { clipy, generateGuids } from './utils';

/* eslint-disable no-console */

const COPYALL = 'copy-all';
const COPIED = 'copied!';

export default class Generate extends Component {
  constructor() {
    super();
    this.state = { guids: [], guidComponents: [], copyButtonText: COPYALL };
  }

  componentDidMount() {
    this.buildGuids();
  }

  buildGuids = () => {
    this.clearCopyAll();
    this.setState({ guids: generateGuids() });
    let guids = [];
    for (let i = 0; i < this.state.guids.length; i++)
      guids.push(<Guid guid={this.state.guids[i]} />);
    this.setState({ guidComponents: guids });
  };

  copyAll = () => {
    this.setState({ guids: this.state.guidComponents.map((g) => { return g.attributes.guid; }), copyButtonText: COPIED });
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
        {this.state.guidComponents}
      </div>
    );
  }
}

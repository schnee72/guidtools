import { h, Component } from 'preact';
import Guid from './Guid';
import { clipy, generateGuids } from './utils';

const COPYALL = 'copy-all';
const COPIED = 'copied!';

export default class Generate extends Component {
  constructor() {
    super();
    this.state = {
      guids: [],
      guidComponents: [],
      copyButtonText: COPYALL,
      guidsClass: '',
      singleChecked: false,
      doubleChecked: false
    };
  }

  componentDidMount() {
    this.buildGuids(true);
  }

  buildGuids = (getNewGuids) => {
    this.clearCopyAll();
    if (getNewGuids)
      this.setState({ guids: generateGuids() });
    let guids = [];
    for (let guid of this.state.guids) {
      guids.push(<Guid guid={this.setGuid(guid)} />);
    }
    this.setState({ guidComponents: guids, guidsClass: '' });
  };

  setGuid = (guid) => {
    if (this.state.singleChecked)
      guid = `'${guid}'`;
    else if (this.state.doubleChecked)
      guid = `"${guid}"`;
    return guid;
  }

  copyAll = () => {
    this.setState({
      guids: this.state.guidComponents.map((g) => { return g.attributes.guid; }),
      copyButtonText: COPIED,
      guidsClass: 'red'
    });
    clipy(this.state.guids.join('\n'));
    setTimeout(() => this.clearCopyAll(), 2500);
  };

  clearCopyAll = () => {
    this.setState({ copyButtonText: COPYALL });
  }

  singleClick = () => {
    if (this.state.doubleChecked) {
      this.setState({ doubleChecked: false });
    }
    this.setState({ singleChecked: !this.state.singleChecked });
    this.buildGuids(false);
  }

  doubleClick = () => {
    if (this.state.singleChecked) {
      this.setState({ singleChecked: false });
    }
    this.setState({ doubleChecked: !this.state.doubleChecked });
    this.buildGuids(false);
  }

  handleBuild = () => {
    this.buildGuids(true);
  }

  render() {
    return (
      <div>
        <h2 title="generate 10 guids at a time">generate</h2>
        <div class="bottom">
          <input
            type="checkbox"
            id="single"
            onclick={this.singleClick}
            checked={this.state.singleChecked} />
          <label for="single">single</label>
          <input
            type="checkbox"
            id="double"
            onclick={this.doubleClick}
            checked={this.state.doubleChecked} />
          <label for="double">double</label>
          &nbsp;
          <button
            class="hundred"
            onClick={this.handleBuild}
            title="generate 10 more guids">refresh</button>
          <button
            class="hundred"
            onClick={this.copyAll}>{this.state.copyButtonText}</button>
        </div>
        <div class={this.state.guidsClass}>
          {this.state.guidComponents}
        </div>
      </div>
    );
  }
}

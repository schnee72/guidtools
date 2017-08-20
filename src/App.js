import {h, Component} from 'preact';
import Guid from './Guid';
import './App.css';
import {clipy, generateGuids} from './utils';

/* eslint-disable no-console */

export default class App extends Component {
  constructor() {
    super();
    this.state = {guids: [], guidComponents: [], copyAllClass: "labelAllHidden"};
  }

  componentDidMount() {
    this.buildGuids();
  }

  buildGuids = () => {
    this.clearCopyAll();
    this.setState({guids: generateGuids()});
    let guids = [];
    for (let i=0; i<this.state.guids.length; i++)
      guids.push(<Guid guid={this.state.guids[i]}/>);
    this.setState({guidComponents: guids});
  };

  copyAll = () => {
    this.setState({guids: this.state.guidComponents.map((g) => {return g.attributes.guid;}), copyAllClass: "labelAll"});
    clipy(this.state.guids.join('\n'));
    setTimeout(() => this.clearCopyAll(), 1750);
  };

  clearCopyAll = () => {
    this.setState({copyAllClass: "labelAllHidden"});
  }

  render() {
    return (
      <div>
        <h1 class="heading">guid tools</h1>
        <div class="buttons">
        <button onClick={this.buildGuids}>regenerate</button>
        <button onClick={this.copyAll}>copy all</button>
        <label class={this.state.copyAllClass} onclick={this.clearCopyAll}>All 10 guids copied to your clipboard!</label>
        </div>
        {this.state.guidComponents}
      </div>
    );
  }
}

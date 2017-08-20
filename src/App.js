import {h, Component} from 'preact';
import uuidv4 from 'uuid/v4';
import Guid from './Guid';
import './App.css';

/* eslint-disable no-console */

export default class App extends Component {
  constructor() {
    super();
    this.state = {guids: [], guidComponents: []};
  }

  componentDidMount() {
    this.generateGuids();
  }

  generateGuids = () => {
    let guids = [];
    for (let i=0; i<10; i++)
      guids.push(<Guid guid={uuidv4()}/>);
    this.setState({guidComponents: guids});
  };

  copyAll = () => {
    this.setState({guids: this.state.guidComponents.map((g) => {return g.attributes.guid;})});
    console.log(this.state.guids);
  };

  render() {
    return (
      <div>
        <h1 class="heading">Guid Tools</h1>
        <div class="buttons">
        <button onClick={this.generateGuids}>Regenerate</button>
        <button onClick={this.copyAll}>copy all</button>
        </div>
        {this.state.guidComponents}
      </div>
    );
  }
}

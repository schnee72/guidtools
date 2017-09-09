import { h, render, Component } from 'preact';
import uuidv4 from 'uuid/v4';
import './index.css';
import Guid from './Guid';
import Validate from './Validate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guids: [],
      singleChecked: true,
      doubleChecked: false
    };
  }

  componentDidMount() {
    this.buildGuids('\'');
  }

  buildGuids = q => {
    this.setState({ guids: [...Array(10)].map((x, i) => <Guid key={i} guid={`${q+uuidv4()+q}`} />)});
  };

  handleGuids = () => {
    let quotes = '';
    if (this.state.singleChecked)
      quotes = '\'';
    else if (this.state.doubleChecked)
      quotes = '"';
    this.buildGuids(quotes);
  }

  handleSingle = e => {
    let quotes = '';
    this.setState({ singleChecked: e.target.checked });
    if (this.state.doubleChecked)
      this.setState({ doubleChecked: false });
    if (e.target.checked)
      quotes = '\'';
    this.buildGuids(quotes);
  }

  handleDouble = e => {
    let quotes = '';
    this.setState({ doubleChecked: e.target.checked });
    if (this.state.singleChecked)
      this.setState({ singleChecked: false });
    if (e.target.checked)
      quotes = '"';
    this.buildGuids(quotes);
  }

  render() {
    return (
      <div>
        <h1>guids</h1>
        <h2>generate</h2>
        {this.state.guids}
        <br/>
        <button onclick={this.handleGuids}>reload</button>
        {' '}<label for='single'>'</label>
          <input id='single' type='checkbox' checked={this.state.singleChecked} onchange={this.handleSingle}/>
        {' '}<label for='double'>"</label>
          <input id='double' type='checkbox' checked={this.state.doubleChecked} onchange={this.handleDouble} />
        <h2>validate</h2>
        <Validate />
        <a href="https://github.com/schnee72/guidtools">source</a>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

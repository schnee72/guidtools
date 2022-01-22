import { h, render, Component } from 'preact';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import Guid from './Guid';
import Validate from './Validate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guids: [],
      singleChecked: true,
      doubleChecked: false,
      capsChecked: true,
      dashChecked: true
    };
  }

  componentDidMount() {
    this.buildGuids('\'');
  }

  buildGuids = q => {
    this.setState({
      guids:
        [...Array(10)].map((_, i) =>
          <Guid key={i} guid={`${q + this.formatGuids() + q}`} />)
    });
  };

  formatGuids = () => {
    let newGuid = uuidv4();

    if (this.state.capsChecked) newGuid = newGuid.toUpperCase();

    if (!this.state.dashChecked) newGuid = newGuid.replace(/[-]/g, '');

    return newGuid;
  }

  handleGuids = () => {
    let quotes = (this.state.singleChecked) ? '\'' : (this.state.doubleChecked) ? '"' : '';

    this.buildGuids(quotes);
  }

  handleSingle = e => {
    let quotes = (e.target.checked) ? '\'' : '';
    this.setState({
      singleChecked: e.target.checked,
      doubleChecked: false
    }, () => this.buildGuids(quotes));
  }

  handleDouble = e => {
    let quotes = (e.target.checked) ? '"' : '';

    this.setState({
      doubleChecked: e.target.checked,
      singleChecked: false
    }, () => this.buildGuids(quotes));
  }

  handleCaps = e => {
    let quotes = (this.state.singleChecked) ? '\'' : (this.state.doubleChecked) ? '"' : '';

    this.setState({ capsChecked: e.target.checked }, () => this.buildGuids(quotes));
  }

  handleDash = e => {
    let quotes = (this.state.singleChecked) ? '\'' : (this.state.doubleChecked) ? '"' : '';

    this.setState({ dashChecked: e.target.checked }, () => this.buildGuids(quotes));
  }

  render() {
    return (
      <div>
        <h1>guids</h1>
        <h2>generate</h2>
        {this.state.guids}
        <br />
        <button onclick={this.handleGuids}>reload</button>
        {' '}<label for='single'>'</label>
        <input id='single' type='checkbox' checked={this.state.singleChecked} onChange={this.handleSingle} />
        {' '}<label for='double'>"</label>
        <input id='double' type='checkbox' checked={this.state.doubleChecked} onChange={this.handleDouble} />
        {' '}<label for='caps'>Caps</label>
        <input id='caps' type='checkbox' checked={this.state.capsChecked} onChange={this.handleCaps} />
        {' '}<label for='dash'>-</label>
        <input name='dash' type='checkbox' checked={this.state.dashChecked} onChange={this.handleDash} />
        <h2>validate</h2>
        <Validate />
        <br />
        <a href="https://github.com/schnee72/guidtools">source</a>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import { h, Component } from 'preact';

const NOT = 'not a guid';
const IS = 'is a guid';

export default class Validate extends Component {
  constructor() {
    super();
    this.state = { labelText: '', labelClass: 'hidden', value: '' };
  }

  validateGuid = () => {
    if (this.state.value.length > 0) {
      this.setState({ labelClass: '' });
      var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (pattern.test(this.state.value))
        this.setState({ labelText: IS });
      else
        this.setState({ labelText: NOT });
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  clear = () => {
    this.hideLabel();
    this.setState({ value: '' });
    this.textInput.value = '';
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.hideLabel();
      this.setState({ value: this.textInput.value });
      this.validateGuid();
      e.preventDefault();
    } else if (this.state.labelClass !== 'hidden') {
      this.hideLabel();
    }
  }

  handleFocus = () => {
    this.textInput.select();
  }

  hideLabel = () => {
    this.setState({ labelClass: 'hidden' });
  }

  render() {
    return (
      <div>
        <h2 title="validate a guid">validate</h2>
        <input
          ref={ti => { this.textInput = ti; }}
          value={this.state.value}
          class="two-seventy-five"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus} />
        <button onclick={this.validateGuid}>check</button>
        <button onclick={this.clear}>clear</button>
        <div><label class={this.state.labelClass}>{this.state.labelText}</label></div>
      </div>
    );
  }
}

import { h, Component } from 'preact';

/* eslint-disable no-console */

const NOT = 'not a guid';
const IS = 'is a guid';

export default class Validate extends Component {
  constructor() {
    super();
    this.state = {labelText: '', labelClass: 'hidden', value: ''};
  }

  validateGuid = () => {
    if (this.state.value.length > 0) {
      this.setState({labelClass: ''});
      var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (pattern.test(this.state.value))
        this.setState({labelText: IS});
      else
        this.setState({labelText: NOT});
    }
  }

  handleChange = (e) => {
    this.setState({labelClass: 'hidden'});
    this.setState({value: e.target.value});
  }

  clear = () => {
    this.setState({labelClass: 'hidden'});
    this.setState({value: ''});
    document.getElementById("input").value = '';
  }

  render(){
    return (
      <div>
        <h2>validate</h2>
        <input id={"input"} class="two-seventy-five" onChange={this.handleChange}/>
        <button onclick={this.validateGuid}>check</button>
        <button onclick={this.clear}>clear</button>
        <div><label class={this.state.labelClass}>{this.state.labelText}</label></div>
      </div>
    );
  }
}

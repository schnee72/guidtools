import { h, Component } from 'preact';

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', label: ''};
  }

  check = () => {
    if (this.state.value.length > 0) {
      this.setState({ labelClass: '' });
      var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (pattern.test(this.state.value))
        this.setState({ label: 'is a guid' });
      else
        this.setState({ label: "not a guid" });
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({ label: '' });
      this.setState({ value: this.textInput.value });
      this.check();
      e.preventDefault();
    } else if (this.state.label !== '') {
      this.setState({label: ''});
    }
  };

  handleChange = e => this.setState({value: e.target.value});

  handleFocus = () => this.textInput.select();

  render() {
    return (
      <div>
        <input
          class='validateBox'
          onkeydown={this.handleKeyDown}
          onchange={this.handleChange}
          onfocus={this.handleFocus}
          ref={input => { this.textInput = input; }} />
        <h3>{this.state.label}</h3>
      </div>
    );
  }
}

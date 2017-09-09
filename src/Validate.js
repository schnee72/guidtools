import { h, Component } from 'preact';

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', label: '', lClass: ''};
  }

  check = () => {
    if (this.state.value.length > 0) {
      this.setState({ labelClass: '' });
      var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (pattern.test(this.state.value))
        this.setState({ label: 'is a guid', lClass: 'green' });
      else
        this.setState({ label: "not a guid", lClass: 'red' });
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({ label: '' });
      this.setState({ value: e.target.value });
      this.check();
      e.preventDefault();
    } else if (this.state.label !== '') {
      this.setState({label: ''});
    }
  };

  handleChange = e => this.setState({value: e.target.value});

  handleClick = e => e.target.setSelectionRange(0, e.target.value.length);

  render() {
    return (
      <div>
        <input
          class='validateBox'
          onkeydown={this.handleKeyDown}
          onchange={this.handleChange}
          onclick={this.handleClick}
          onblur={this.check} />
        <h3 class={this.state.lClass}>{this.state.label}</h3>
      </div>
    );
  }
}
